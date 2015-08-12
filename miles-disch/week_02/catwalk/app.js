var cat = document.querySelector('#cat');
var bodyWidth = window.innerWidth;



cat.style.left = '0px';
var walkRight = function() {

  var oldLeft = parseInt(cat.style.left);
  var newLeft = oldLeft + 1;
  cat.style.left = newLeft + 'px';
  if (parseInt(cat.style.left) >= (window.innerWidth - 296)) {
  	  	window.clearInterval(walkTimer);
  	  	walkTimerTwo = window.setInterval(walkLeft, 10);

  }
};
 


var walkLeft = function() {
	var oldRight = parseInt(cat.style.left);
	var newRight = oldRight - 1;
	cat.style.left = newRight + 'px';
	if (parseInt(cat.style.left) <= 100){
		window.clearInterval(walkTimerTwo);
		walkTimer = window.setInterval(walkRight, 10);
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


