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
		//小圆点
		index++;
		if(index>4){
			index=0;
		}
		showCurrentDot();
	}
	function prev_pic(){
		var newLeft;
		if(slider.style.left==="0px"){
			newLeft=-4000;
		}else{
			var newLeft = parseInt(slider.style.left)+1000;
		}
		slider.style.left = newLeft+"px";
		//小圆点
		index--;
		if(index<0){
			index=4;
		}
		showCurrentDot();
	}
	//自动播放
	var timer = null;
	function autoPlay(){
		timer = setInterval(function (){
			next_pic();
		},2000);
	}
	autoPlay();
	//清除自动播放
	var Swrap = document.getElementsByClassName('slider-wrap')[0];
	Swrap.onmouseenter = function(){
		clearInterval(timer);
	}
	Swrap.onmouseleave = function(){
		autoPlay();
	}
	//设置小圆点
	var index = 0;
	var dots = document.getElementsByTagName('span');
	function showCurrentDot(){
		for(var i=0,len=dots.length;i<len;i++){
			dots[i].className="";
		}
		dots[index].className = "on";
	}
	for (var i = 0, len = dots.length; i < len; i++){
            (function(i){
                dots[i].onclick = function () {
                    var dis = index - i;
                    if(index == 4 && parseInt(slider.style.left)!==-5000){
                        dis = dis - 5;     
                    }
                    //和使用prev和next相同，在最开始的照片5和最终的照片1在使用时会出现问题，导致符号和位数的出错，做相应地处理即可
                    if(index == 0 && parseInt(slider.style.left)!== -1000){
                        dis = 5 + dis;
                    }
                    slider.style.left = (parseInt(slider.style.left) +  dis * 1000)+"px";
                    index = i;
                    showCurrentDot();
                }
            })(i);            
        }
}
