/*var currentpos = 0;

function plusFindAll(x) {
	findAll(currentpos += x);
}

function findAll(x) {
	var find;
	find = document.getElementById("find-all-submenu");
	if (x == 2) {
		currentpos = 0;
	}
	if (currentpos == 1) {
		find.style.display = "block";
	}
	if (currentpos == 0) {
		find.style.display = "none";
	} 
}

showSlide();

function showSlide() {
	var slide = document.getElementsByClassName('section5-slide-container');
	for (var i = 0; i < 4; i++) {
		slide[i].style.display = "block";
	}
}

function nextSlide() {
	var slide = document.getElementsByClassName('section5-slide-container');
	for (var i = 0; i < slide.length; i++) {
		slide[i].style.display = "none";
	}
	for (var i = 0; i < slide.length - 1; i++) {
		slide[i].style.display = "block";
	}
}

function prevSlide() {
	var slide = document.getElementsByClassName('section5-slide-container');
	for (var i = 0; i < slide.length; i++) {
		slide[i].style.display = "none";
	}
	for (var i = 1; i < slide.length; i++) {
		slide[i].style.display = "block";
	}
}*/


$(document).ready(function () {
	$('.autoplay').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    autoplay: true,
	    autoplaySpeed: 500,
	});
	$("#all-button").click(function(){
		$("#find-all-submenu").fadeToggle();
	});
});

