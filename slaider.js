var slides = document.querySelectorAll('.slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);
function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
var popUps = document.querySelectorAll('.popUps .popUp');
var currentPopUp = 0;
var PopUpInterval = setInterval(nextPopUp,3000);
function nextPopUp() {
    popUps[currentPopUp].className = 'popUp';
    currentPopUp = (currentPopUp+1)%popUps.length;
    popUps[currentPopUp].className = 'popUp showing';
}
