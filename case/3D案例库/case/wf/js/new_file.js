//无缝轮播
$(function (){
	//获取元素
	let $banner = $("#banner"),
		$picUl = $("#banner .pic ul"),
		$tabLi = $("#banner .tab ul li"),
		$btn = $("#banner .btn"),
		$btnDiv = $("#banner .btn div"),
		//获取图片的宽度
		imgLi = $("#banner .pic ul li").width();
	//定义变量
	let index = 0,
		nowTime = new Date(); //获取当前的时间
	let timer =null;
		//底部小圆圈事件
	$tabLi.click(function(){
		index = $(this).index();
		$(this).addClass("on").siblings().removeClass("on");//当按钮被点击显示样式，其它同级隐藏样式
		$picUl.animate({
			marginLeft: -imgLi*(index+1) + 'px'
		},300);
	});
	//当鼠标悬浮到图片上时 显示左右按钮
	$banner.hover(function(){
		$btn.show();
		clearInterval(timer);
	},function(){
		$btn.hide();
		timer = setInterval(function(){
		index++;
		fn();
	},5000)
	})
	//左右点击事件 (jquery 已经自动遍历)
	$btnDiv.hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	}).click(function(){
		//防止鼠标点击过快，每过0.5秒后  可在点击
		if(new Date() - nowTime > 500){
			nowTime = new Date();
			let i = $(this).index(); 
			i?index++:index--; // 判断是第0个（左），还是（右），返回boolean
			fn();
		}
	}).mousedown(function(){
		return false;   //阻止默认事件
	})

	//轮播时间
		timer = setInterval(function(){
		index++;
		fn();
	},5000)
	//无缝轮播效果
	function fn(){
		//当前是第几张图片,对应下面的小圆圈
		let liIndex  = index;
		if(liIndex >= $tabLi.length){
			liIndex = 0//返回第一个小圆圈
		}else if(liIndex < 0){
			liIndex = $tabLi.length-1;//返回最后一个小圆圈
		}
		$tabLi.eq(liIndex).addClass("on").siblings().removeClass("on");
		$picUl.animate({
			marginLeft : -imgLi*(index+1) + "px"
		},500,function (){
			if(index == $tabLi.length){//判断图片是 最后一个（加）， 还是第一个（减）
				$picUl.css("marginLeft", -imgLi + "px");
				index = 0; 
			}else if (index < 0){
				$picUl.css("marginLeft", -imgLi*($tabLi.length) + "px");
				index = $tabLi.length-1;
			}
		})
	}
});
