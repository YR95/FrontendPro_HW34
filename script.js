const input = document.querySelector('#text');
const div = document.createElement('div');
document.body.style.display = 'flex';

console.log(input);

input.addEventListener("focus", (event) => {
  input.after(div)
  div.style.background = 'red';
  div.style.width = '40px';
  div.style.height = '40px';

}, true);
input.addEventListener('blur', evt => {
  div.remove();
}, true)