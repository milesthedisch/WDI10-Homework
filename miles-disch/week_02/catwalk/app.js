var cat = document.querySelector('#cat');
var catSrc = "http://www.anniemation.com/clip_art/images/cat-walk.gif"
var newCatSrc = "http://38.media.tumblr.com/ba2307cf0b380cd12064d1811db20c2b/tumblr_nt05sdyVbg1s02vreo2_400.gif"
var bodyWidth = window.innerWidth;



cat.style.left = '0px';
var walkRight = function() {

  var oldLeft = parseInt(cat.style.left);
  var newLeft = oldLeft + 1;
  cat.style.left = newLeft + 'px';
	if (parseInt(cat.style.left) >= (window.innerWidth - 296)) {
  	  	window.clearInterval(walkTimer);
  	 	var transform = cat.style.transform = "scale(-1, 1)";
	 	walkTimerTwo = window.setInterval(walkLeft, 1);
  	} else if ( parseInt(cat.style.left) === parseInt(window.innerWidth/2) - 100 ) {
  		dance(); 
  	}
};

 var dance = function ( ) {	
 	var newCatSrc = "http://38.media.tumblr.com/ba2307cf0b380cd12064d1811db20c2b/tumblr_nt05sdyVbg1s02vreo2_400.gif"
	cat.src = newCatSrc
	clearInterval(walkTimer)
	var timeOut = setTimeout(stopdance, 3000);
	if (parseInt(cat.style.left) < window.innerWidth/2 - 100) {
			
	}
}

var stopdance = function ( ) {
	cat.src = catSrc
	if (parseInt(cat.style.left) <= (window.innerWidth/2) - 100) {
		 var walkTimer = setInterval(walkRight, 10)
	} else if (parseInt(cat.style.left) >= (window.innerWidth/2) - 100){
		var walkTimerTwo = setInterval(walkLeft, 10	)
	}
}


var walkLeft = function() {
	var oldRight = parseInt(cat.style.left);
	var newRight = oldRight - 1;
	cat.style.left = newRight + 'px';
	if (parseInt(cat.style.left) <= 0){
		window.clearInterval(walkTimerTwo);
		var transform = cat.style.transform = "scale(1, 1)";
		walkTimer = window.setInterval(walkRight, 1);
	} 
	else if ( parseInt(cat.style.left) == parseInt(window.innerWidth/2) - 100) {
  		dance(); 
  	}
};

// var walkLeft = function () {
// 	var oldRight = parseFloat(cat.style.right);
// 	var newRight = oldRight + 1
// 	cat.style.right = newRight + 'px';
// 	if ( parseFloat(cat.style.right) >= window.innerWidth ) {
// 		debugger;
// 		window.clearInterval(walkTimer);
// 	}
// }
var walkTimerTwo;
var walkTimer = window.setInterval(walkRight, 10);


