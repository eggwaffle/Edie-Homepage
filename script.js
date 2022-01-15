const menu = document.getElementById("menu");
const open = document.getElementById("open");
const close = document.getElementById("close");
const items = menu.getElementsByTagName("li");

function togglemenu() {
  menu.classList.toggle('hidden');

  if (open.innerText === 'menu') {
    open.innerHTML = '<span class="material-icons">close</span>';
    /*
    for (let item of items) {
      item.classList.add('block');
    }
    */
  } else {
    open.innerHTML = '<span class="material-icons">menu</span>';
  };
}