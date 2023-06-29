const buttonLeft = document.querySelector('.shop-section__left-button');
const buttonRight = document.querySelector('.shop-section__right-button');
const slider__list = document.querySelector('.slider');
const slide = document.querySelectorAll('.slide');
var value = 0;
var listLength = document.querySelectorAll(".slide").length;
buttonLeft.addEventListener('click', function () {
    let slideWidth = document.querySelector('.slide').offsetWidth;
    let step = slideWidth;
    if (value != 0) {
        value += step;
        for(let i = 0; i < listLength; i++){
            slide[i].style.transform = 'translateX(' + value.toString() + 'px)';
        }
    }
});
buttonRight.addEventListener('click', function () {
    let slideWidth = document.querySelector('.slide').offsetWidth;
    let step = slideWidth;
    if (value != -(listLength - 1) * step) {
        value -= step;
        for(let i = 0; i < listLength; i++){
            slide[i].style.transform = 'translateX(' + value.toString() + 'px)';
        }
    }
});