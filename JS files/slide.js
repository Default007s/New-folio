let arrowLeft = document.querySelector(".arrowLeft");
let arrowRight = document.querySelector(".arrowRight");

let testimonials = document.querySelector(".testimonials");
let slideLeft = testimonials.style.left;
slideLeft = 0;

let dot1 = document.querySelector(".dot1");
let dot2 = document.querySelector(".dot2");
let dot3 = document.querySelector(".dot3");

function dotsFunc() {
  if (slideLeft === 0) {
    dot1.style.opacity = 1;
    dot2.style.opacity = 0.3;
    dot3.style.opacity = 0.3;
  }

  if (slideLeft === -100) {
    dot2.style.opacity = 1;
    dot1.style.opacity = 0.3;
    dot3.style.opacity = 0.3;
  }

  if (slideLeft === -200) {
    dot3.style.opacity = 1;
    dot2.style.opacity = 0.3;
    dot1.style.opacity = 0.3;
  }
}

dot1.addEventListener("click", function () {
  slideLeft = 0;
  testimonials.style.left = `${slideLeft}%`;
  dotsFunc();
});

dot2.addEventListener("click", function () {
  slideLeft = -100;
  testimonials.style.left = `${slideLeft}%`;
  dotsFunc();
});

dot3.addEventListener("click", function () {
  slideLeft = -200;
  testimonials.style.left = `${slideLeft}%`;
  dotsFunc();
});

arrowLeft.addEventListener("click", function () {
  if (slideLeft > -200) {
    slideLeft = slideLeft - 100;
    testimonials.style.left = `${slideLeft}%`;
  } else if(slideLeft = -200){
    slideLeft = 0;
    testimonials.style.left = `${slideLeft}%`;
  }
  dotsFunc();
});

arrowRight.addEventListener("click", function () {
  if (slideLeft != 0) {
    slideLeft = slideLeft + 100;
    testimonials.style.left = `${slideLeft}%`;
  } else if(slideLeft == 0){
    slideLeft = slideLeft - 200;
    testimonials.style.left = `${slideLeft}%`;
  }
  dotsFunc();
});
