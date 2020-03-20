/* Showing stars */
anime({
    targets: '.header-main-stars',
    delay: 2500,
    opacity: 1
});

var spans = document.querySelector('.spans');
var headerNav = document.querySelector('.header-nav-right');
var form = document.querySelector('.myForm');
var submit = document.querySelector('#submit');
var inpP = document.querySelector('.validate-text');
var patterns = {
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};
/* Form validations */
function validate(field, regex) {
  if(regex.test(field.value)) {
      field.className = 'valid';
  }
  else {
      field.className = 'invalid';
  }
}
form.addEventListener('keyup', function(e) {
      validate(e.target, patterns[e.target.attributes.name.value]);
      var input = form.email.value;
      if(input.length) {
        inpP.style.display = "block";
      }
      else {
        inpP.style.display = "none";
      }
});

submit.addEventListener('click', function(e) {
  e.preventDefault();
});

/* hamburger menu */
function myFunction() {
  var nav = document.querySelector('.header-nav-right');
  if (nav.className === "header-nav-right") {
    nav.className += " responsive";
  } else {
    nav.className = "header-nav-right";
  }
}
function myFunction(x) {
  x.classList.toggle('change');
}
spans.addEventListener('click', function() {
  if(headerNav.className === 'header-nav-right') {
    headerNav.className += " responsive";
  }
  else {
    headerNav.className = "header-nav-right";
  }
});


/* carousel */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carouselSlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "grid";  
  dots[slideIndex-1].className += " active";
}