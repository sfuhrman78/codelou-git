// Tips Generator under junk Car review
var tips = [
  "Don\'t use cruise control in the rain, it can cause you to hydroplane and loose control.",
  "On a three lane interstate or highway, use the middle lane, left lane to pass, and right lane to exit.",
  "After passing using the left hand lane, get back to the middle or right lane as soon as safely possible",
  "When parking on an incline turn wheel to curb before turning off car.  If car slips gear the curb will chalk the wheels."
]
function nextTip(){
  var randomNumber = Math.floor(Math.random()*(tips.length));
  document.getElementById('tipsGenerator').innerHTML = tips[randomNumber];
}



//Lightbox for junk car review
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
