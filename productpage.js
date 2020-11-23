/* Carousel code referenced and modified from w3schools.com/howto/howto_js_slideshow.asp */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// When the user clicks on div, open the popup
// Referenced and modified from https://www.w3schools.com/howto/howto_js_popup.asp
function popUp1() {
    var popup = document.getElementById("myPopup_1");
    popup.classList.toggle("show");

}

function popUp2() {
    var popup = document.getElementById("myPopup_2");
    popup.classList.toggle("show");

}

function popUp3() {
    var popup = document.getElementById("myPopup_3");
    popup.classList.toggle("show");
}