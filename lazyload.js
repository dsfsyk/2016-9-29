window.onload = function(){
	var imgArr = document.querySelectorAll(".lazyload");
	function isShow(img){

	}
	function init(){
		var windowHeigth = window.innerHeight;
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		var height = document.body.scrollHeight;

		for(var i = 0;i<imgArr.length;i++){
			if(imgArr[i].offsetTop < windowHeigth){
				imgArr[i].src = imgArr[i].getAttribute("data-src");
			}
		}
	}
	init();
	window.onscroll = function(){
		var windowHeigth = window.innerHeight;
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		var height = document.body.scrollHeight;

		for(var i = 0;i<imgArr.length;i++){
			if(imgArr[i].scrollTop <= (windowHeigth+scrollTop) && !imgArr[i].src){
					imgArr[i].src = imgArr[i].getAttribute("data-src");
			}
		}
	}
}