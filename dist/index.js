const bodyTag = document.querySelector('body');
const imgTag = document.getElementById('imgId')
const textTag = document.querySelectorAll('h1');
const linkTag = document.getElementsByTagName('a');

function changeScene() {
  Array.from(linkTag)
  .forEach(linkTag => linkTag.classList.add('white'));
  bodyTag.classList.add('body');
  imgTag.src = "assets/softie_wink.gif";
  Array.from(textTag)
  .forEach(textTag => textTag.classList.add('white'));
}

setInterval(changeScene, 3000);
