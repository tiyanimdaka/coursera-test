var myBtn = document.getElementById("myButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
		myBtn.style.display = 'block';
		
	} else {
		myBtn.style.display = 'none';
		
	}
}

function topFunction(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}