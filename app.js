var text = document.getElementById('banner-text');
var title = document.getElementById('title');

function fadeOutOnScroll(element, addValue) {
	if (!element) {
		return;
	}
	
	var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
	var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop + addValue;
	
	var opacity = 1;
	
	if (scrollTop > distanceToTop) {
		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
	}

	if (opacity >= 0) {
		element.style.opacity = opacity;
	}
	else {
		element.style.opacity = 0;
	}
}

function scrollHandler() {
	fadeOutOnScroll(text, 250);
}

window.addEventListener('scroll', scrollHandler);

window.onscroll = function() {
	if (window.scrollY < 505)
		title.style.right = window.scrollY * -3 + 1500 + "px";
	else {
		title.style.right = 505 * -3 + 1500 + "px"
	}
	fadeOutOnScroll(title, 100);
}