var slideIndex = 0;
// showSlides();
let flag = true

document.getElementsByClassName("mySlides")[0].style.display="block"

// Next/previous controls
function plusSlides(n) {
  flag=true
  slideIndex += n
  showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
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


function showSlides() {
  if (flag == false) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
  } // Change image every 2 seconds
}

function evokeFlag() {
  flag = false
}

function playSlides() {
  evokeFlag()
  showSlides()
}

function pauseSlides() {
  flag = true
  var slides = document.getElementsByClassName("mySlides");
  slides[slideIndex - 1].style.display = "block";
}