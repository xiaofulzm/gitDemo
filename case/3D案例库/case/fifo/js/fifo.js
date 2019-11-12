$(function(){
//	获取元素
	let $banner =  $("#banner"),
		$picLi = $("#banner .pic li"),
		$btn = $("#banner .btn")
		$btnDiv = $("#banner .btn div"),
		$tabLi = $("#banner .tab ul li");
	//定义变量
	let index = 0,
		timer = null;
	//鼠标移入banner时
	$banner.hover(function(){
		$btn.show();
		clearInterval(timer);
	},function(){
		$btn.hide();
		auto();
	});
	//左右按钮
	//增加判断  当鼠标点击后  0.5秒可再次点击
	let lastTime = 0;
	$btnDiv.click(function(){
		//当前时间减去lastTime 如果小于0.5秒    则直接return   大于 0.5则执行下面代码  防止点击过快
		if(new Date() - lastTime<500)return;
		lastTime = new Date();
		let i = $(this).index();
		if(i){
			index ++;
			//index %= $picLi.length;
			if(index >= $picLi.length) index = 0;
		}else{
			index --; 
			if(index<0) index = $picLi.length-1;
		}
		fn();
	}).mousedown(function (){
		return false;
	});
	//底部圆圈事件
	$tabLi.click(function(){
		index = $(this).index();
		fn();
	});
	//自动轮播定时器
	auto();
	function auto(){
		timer = setInterval(function(){
			index ++;
			if(index >= $picLi.length) index = 0;
			fn()
		},5000)
	}
	//淡入淡出效果
	function fn (){
		$tabLi.eq(index).addClass("on").siblings().removeClass("on");
		$picLi.eq(index).stop(true).fadeIn().siblings().stop(true).fadeOut();
	}
})
