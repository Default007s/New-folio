const card = document.getElementsByClassName('card');
const c2 = document.getElementsByClassName('c2');

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener('mouseover', function () {
      c2[i].style.marginTop = '-240px';
  });
}

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener('mouseout', function () {
      c2[i].style.marginTop = '-7vw';
  });
}