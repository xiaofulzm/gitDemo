(function (){
	let aLi = document.querySelectorAll("#tab ul li"),
		oCss = document.getElementById("css");
	aLi.forEach((item,index)=>{
		item.onclick = function (){
			//利用循环删除所有的on样式 然后再给被点击的  添加on样式
			for (let j = 0;j < aLi.length; j++) {
				aLi[j].classList.remove("on");
			}
			this.classList.add("on");
			oCss.innerHTML += `.pic ul li{transform:translateZ(-180px) rotateX(${-90*index}deg);}`;
		}
	})
})();