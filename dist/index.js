const bodyTag = document.querySelector('body');
const textTag = document.querySelectorAll('h1');
const linkTag = document.getElementsByTagName('a');

function changeScene() {
  Array.from(linkTag)
  .forEach(linkTag => linkTag.classList.add('white'));
  bodyTag.classList.add('body');
  Array.from(textTag)
  .forEach(textTag => textTag.classList.add('white'));
}

setInterval(changeScene, 3000);
