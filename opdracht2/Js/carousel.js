/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var track = document.querySelector('.track');
var slides = Array.from(track.children);
var nextButton = document.querySelector('.button--right');
var prevButton = document.querySelector('.button--left');

/*Afbeeldingen naast elkaar*/
var slideWidth = slides[0].getBoundingClientRect().width;

var slidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(slidePosition);

/*Naar de vorige foto*/
var moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-'+ targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

prevButton.addEventListener('click', e => {
    var currentSlide = track.querySelector('.current-slide');
    var prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
})

/*Naar volgende foto*/
nextButton.addEventListener('click', e => {
    var currentSlide = track.querySelector('.current-slide');
    var nextSlide = currentSlide.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
})
