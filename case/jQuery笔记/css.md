**css**

​	**css**

​		访问元素的样式属性

```
设置样式
$("p").css("color","red");
逐渐增加div的大小
 $("div").click(function() {
    $(this).css({
      width: function(index, value) {
        return parseFloat(value) * 1.2;
      }, 
      height: function(index, value) {
        return parseFloat(value) * 1.2;
      }
    });
  });
```

**offset**

​	获取匹配元素在当前视口的相对偏移

​	返回的对象包含两个整型属性： top和left   以像素计   此方法只对可见元素有效

```
var p = $("p:last");
var offset = p.offset();
p.html( "left: " + offset.left + ", top: " + offset.top );
```

**position**

​	获取匹配元素相对父元素的偏移

​	返回的对象包含两个整型属性： top和left  为精确计算结果请在补白、边框和填充属性上使用像素单位 

```
<p>Hello</p><p>2nd Paragraph</p>
获取到父级的偏移
var p = $("p:first");
var position = p.position();
$("p:last").html( "left: " + position.left + ", top: " + position.top );
```

**scrollTop**

​	获取匹配元素相对滚动条顶部的偏移

​	此方法对可见和隐藏元素均有效

```
var p = $("p:first");
$("p:last").text( "scrollTop:" + p.scrollTop() );
```

**scrollLeft**

​	获取匹配元素相对滚动条左侧的偏移

​	此方法对可见和隐藏元素均有效

```
var p = $("p:first");
$("p:last").text( "scrollLeft:" + p.scrollLeft() );
```

**height**

​	取得匹配元素当前计算的高度值（px）

​	在jQuery1.2以后可以用来获取window和document的高

**width**

​	取得匹配元素当前计算的宽度值（px）

​	在jQuery1.2以后可以用来获取window和document的宽

**innerHeight**

​	获取第一个匹配元素内部区域高度（包括补白，不包括边框）

​	此方法对可见隐藏元素有效

```
<p>Hello</p><p>2nd Paragraph</p
var p = $("p:first");
$("p:last").text( "innerHeight:" + p.innerHeight() );
结果
<p>Hello</p><p>innerHeight: 16</p>
```

**innerWidth**

​	获取第一个匹配元素内部区域宽度（包括补白，不包括边框）

​	此方法对可见隐藏元素均有效

**outerHeight**

​	获取第一个匹配元素外部高度（默认包括补白和边框）

​	此方法对可见隐藏元素均有效

```
<p>Hello</p><p>2nd Paragraph</p
var p = $("p:first");
$("p:last").text( "outerHeight:" + p.outerHeight() );
结果
<p>Hello</p><p>outerHeight: 16</p>
```

**outerWidth**

​	获取第一个匹配元素外部高度（默认包括补白和边框）

​	此方法对可见隐藏元素均有效