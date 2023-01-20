$(document).ready(function(){
	init();
});

function init(){
	counter();
}

function counter() {
	$('.counter').counterUp({
			delay: 10,
			time: 1000

	});
}