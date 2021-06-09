let eclipseLeft1 = document.querySelector(".eclipseLeft1");
let eclipseRight1 = document.querySelector(".eclipseRight1");
let eclipseRight2 = document.querySelector(".eclipseRight2");

window.addEventListener("scroll", function () {
  var value = window.scrollY;
  eclipseLeft1.style.left = `${-value - 4 + 0.5}vw`;
  eclipseRight1.style.right = `${-value - 4 + 0.5}vw`;
  eclipseRight2.style.right = `${-value + 5 + 0.5}vw`;
});
