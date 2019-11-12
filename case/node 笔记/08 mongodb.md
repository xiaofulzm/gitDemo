**mongodb**

**1**	引入

```
const  mongoose = require("mongoose");
```

**2**	链接数据库

```
//链接数据库
//地址 ： mongodb://localhost:27017/数据库名
mongoose
	.connect("mongodb://localhost:27017/lzm", {useNewUrlParser:true})
	.then(
		()=>{
			console.log("数据库链接成功")
		}
	)
	.catch((err)=>{
		console.log("数据库链接失败");
		console.log(err)
	})

```

**3**   	建立表规则

```
建表之前    建立表的规则   Schema（s该嘛）

connst Schema = monsoose.Schema;
//创建一个规则（比如我们准备创建一个user表，那么我们建立一个名userSchema的表规则, 名字随便起，为了见名知意 我们叫userSchema）

let  userSchema = new Schema({
	name : {type:String,required:true},
	pwd : {type:String,required:true},
	age : Number,
	status : {type:String,default:"这个人很难什么都没有留下！"}
});
```

4	建表

```
//建表
const user = mongoose.model("user",userSchema);

//存储数据，实际项目中，不可能在建表之后立马在在当前文件中存储数据
module.exprorts = user;
```

**增**

```
//测试   增
user.create(
	{
		user:"lzm"
		,pwd:"123456"
		,age:18
	}
	,{
		user:"afei"
		,pwd:"1225456"
		,age:30
	}
	,{
		user:"sadm"
		,pwd:"12ada6"
		,age:1156
	}
);
```

**删**

```
//测试   删    remove已经被遗弃了    用deleteOne   deleteMany来代替

/*user.deleteMany(
	//第一个参数是一个查找条件
	{age:30}
	//必须要一个回调函数来接收错误对象
	,(err)=>{ if(err) throw err}
);*/

/*user
	.deleteOne({_id:"5d43d0275c89a54204ab4a75"})
	.then(()=>{ console.log("删除成功") } )
	.catch((err)=>{ if(err) throw err });
*/
//删除多个条件 
user
	.deleteMany(
		{ pwd:"1225456",age:30}
	)
	.catch(err=>{})
```

**改**

```
//改 update updateOne updateMany findByIdAndUpdate
/*
Model.update(conditions,doc,[options],[callback])
	conditions   查询条件（和find一样）
	doc          要修改的内容
	options      选项
	callback     回调 参数err,info(更新成功的信息) ，可以用Promise代替
*/
/*
doc 要修改的内容
	{password:"456"}                     修改 password 为"456"  
	{$set:{"userInfo.test":"123"}}       修改 userInfo.test 为"123"
	{$inc:{age:1}}                       修改 age  自增1
	{$unset:{age:0}}                     移除 age 属性（值随便写啥都是移除）
	
	{$push:{arr:999}}                    为 arr数组 添加一条 999 值
	{$push:{test: {$each:[1,4,5,9],$slice:-5}}}  为 arr数组 添加 1 4 5 9 值，并截取倒数5个
	{$addToSet:{arr:20}}                 为 arr数组 添加一条 20 值，如果20存在，则不添加
	{$pop:{arr:1}}                       删除 arr数组 的最后一项，arr值为-1则删除第一项
	{$pull:{arr:123}}                    删除 arr数组 所有123值
```

查

```
//查  find  findOne  findById
/*
Model.find( conditions, [projection], [options], [callback] );
	conditions  查询条件
	projection  返回内容选项
	options     查询配置选项
	callback    回调函数，参数err data，可用Promise代替
*/
/*
conditions 常用查询条件，详细查询条件请参考官方文档
	{}                      基础条件块，eg:  {name:"afei"}
	
	$or $nor                或者 或者取反，eg:  {$or:[{name:"afei"},{age:"20"}]}
	
	$gt $gte $lt $lte $ne   大于 大于等于 小于 小于等于 不等于，eg:  {age:{$lt:20}}
	$in $nin                在/不在 指定的多个字段之类，eg:  {name:{$in:["afei","zhuque"]}}
	$exists                  存在某属性，eg:  {age:{$exists:true}}
	
	$size                   数组长度匹配，eg:  {arr:{size:2}}
	$all                    数组中是否存在指定的所有项，eg:  {arr:{$all:[123,456]}}
	
	$where                  可以使用JavaScript代码或函数，eg:  {$where:"this.age===18"}
	正则                    使用正则匹配，eg:  {name:/afei/}
*/
/*
projection  返回内容选项
	默认全部显示，
	{age:1}        只显示age属性和_id属性
	{age:1,_id:0}  只显示age属性
*/
/*
options  查询配置选项
	常用skip limit sort
	{skip:2}         略过前2条数据
	{limit:5}        最多返回5条属性
	{sort:{age:1}}   按照age项升序排列
```

```
user
    .find(
        {userName:"afeifei"}
    )
    .then(data=>{
        console.log(data);
    })
    .catch(e=>{
        console.log(e);
    });
```

```
user
    .find(
        {userName:"afeifei"},
        {userName:1,_id:0}
    )
    .then(data=>{
        console.log(data);
    })
    .catch(e=>{
        console.log(e);
    });
```

```
user
    .find(
        {userName:"afeifei"},
        {userName:1,_id:0},
    	{skip:2,limit:3,sort:{age:1}}
    )
    .then(data=>{
        console.log(data);
    })
    .catch(e=>{
        console.log(e);
    });
```

允许使用的 SchemaTypes 有:

- String   	 	字符串
- Number             数字
- Date                 日期   时间
- Buffer                缓冲流   （两个数字作为一个信息）
- Boolean              布尔值
- Mixed                   混合数据格式
- ObjectId               机器码   pid   时间戳  随机数（保证每个数据id不一样）
- Array                  数组