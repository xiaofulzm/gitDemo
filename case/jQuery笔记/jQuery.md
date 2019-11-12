**jQuery**	

**<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>**

​	jQuery 是一个有javascript 代码编写出来的库

​		原生js操作DOM非常的麻烦  并且功能API的使用方式不统一

​		动画非常的难做

​		兼容

​	jQuery的版本

​		1.x.x      兼容所有浏览器

​		2.x.x

​		3.x.x       不在兼容低版本IE 优化了很多兼容代码以及使用了css3很多新的原生API

**目前使用jQuery**   1.12.4    		3.4.1

**两个全局变量**

​	$

​	jQuery

**$接受的参数**

​	选择器字符串   返回jQuery对象

​	DOM节点，或者一组DOM节点

​	一个函数

```
$(function () {
    //等所有的DOM节点加载完成之后执行
    
})
```

jQuery对象 和DOM 对象

```
let op = document.querySelector(".box p")
oP.css("color" , "red")  //DOM对象不能使用jq的API
let $p = $(".box p")
$p .style.color= "red"   //jq对象不能使用DOM的API
```

​	

```
let aP = document.querySelectorAll（".box p"）;
let $p = $(ap); //DOM对象   转换成jq对象
let $p = $(".box p");
//jq对象 转换成DOM对象
$P[1].style.color = "red";
$p.get(1).style.color = "red";
```

传入两个字符参数    	设置的意思

传入一个数字参数		取值的意思

传入一个对象			设置多组属性的意思

传入字符串和函数		用函数的返回值来代替原本应该传入的字符串值

**属性**

```
let $wrap  = $("#wrap");
$wrap.attr("xiaofu","小夫")；//添加属性
$wrap.attr({
    "afei": "阿飞"，
    "xiaofu": "小夫"
})
$wrap.removeAttr("xaiofu"); //删除属性
$wrap.attr("afei",function(){
    return "阿飞"；
})
```

