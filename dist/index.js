const bodyTag = document.querySelector('body');
const imgTag = document.getElementById('imgId')
const textTag = document.querySelectorAll('h1');
const linkTag = document.getElementsByTagName('a');

function changeText() {
  Array.from(linkTag)
  .forEach(linkTag => linkTag.classList.add('white'));
  Array.from(textTag)
  .forEach(textTag => textTag.classList.add('white'));
};

function changeImages() {
  bodyTag.classList.add('body');
  imgTag.src = "assets/softie_wink.gif";
};

function initAnimation() {
  bodyTag.classList.remove('fadeIn');
  void bodyTag.offsetWidth;
  bodyTag.classList.add('fadeIn');
}

setInterval(changeText, 3000);
setInterval(changeImages, 3000);
setInterval(initAnimation,3001);
