/* Carousel code referenced and modified from w3schools.com/howto/howto_js_slideshow.asp */

var slideIndex = 1;
var myTimer;
var slideshowContainer;

window.addEventListener("load", function() {
    showSlides(slideIndex);
    myTimer = setInterval(function() { plusSlides(1) }, 2000);
    slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0) {
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }
    if (n === -1) {
        myTimer = setInterval(function() { plusSlides(n + 2) }, 3000);
    } else {
        myTimer = setInterval(function() { plusSlides(n + 1) }, 3000);
    }
}

//Controls the current slide and resets interval if needed
function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function() { plusSlides(n + 1) }, 4000);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

pause = () => {
    clearInterval(myTimer);
}

resume = () => {
    clearInterval(myTimer);
    myTimer = setInterval(function() { plusSlides(slideIndex) }, 2000);
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