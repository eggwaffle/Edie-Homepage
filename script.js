const menu = document.getElementById("menu");
const open = document.getElementById("open");
const close = document.getElementById("close");
const items = menu.getElementsByTagName("li");

function togglemenu() {
  if (open.innerText === 'menu' && window.screen.width< 768) {
    open.innerHTML = '<span class="material-icons">close</span>';
    menu.classList.toggle('hidden');
  } else if (open.innerText === 'close' && window.screen.width< 768) {
    open.innerHTML = '<span class="material-icons">menu</span>';
    menu.classList.toggle('hidden');
  };
}