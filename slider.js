window.onload = function(){
	//手动滑动
	var slider = document.getElementsByClassName('slider')[0];
	var next = document.getElementsByClassName('arrow-right')[0];
	var prev = document.getElementsByClassName('arrow-left')[0];
	next.onclick = function (){
		next_pic();
	}
	prev.onclick = function (){
		prev_pic();
	}
	function next_pic(){
		var newLeft;
		if(slider.style.left==="-6000px"){
			newLeft=-2000;
		}else{
			newLeft = parseInt(slider.style.left)-1000;
		}
		slider.style.left = newLeft+"px";
	}
	function prev_pic(){
		var newLeft;
		if(slider.style.left==="0px"){
			newLeft=-4000;
		}else{
			var newLeft = parseInt(slider.style.left)+1000;
		}
		slider.style.left = newLeft+"px";
	}
	//自动播放
	var timer = null;
	function autoPlay(){
		timer = setInterval(function (){
			next_pic();
		},2000);
	}
	autoPlay();	
}
