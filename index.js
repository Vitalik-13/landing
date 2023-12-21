const burgerMenu = document.querySelector("#check");
const menuBurger = document.querySelector(".menu-burger");
const body = document.querySelector(".body");
burgerMenu.addEventListener("click", () => {
  if (burgerMenu.checked) {
    menuBurger.classList.add("transform");
    body.classList.add("overflow");
  } else {
    menuBurger.classList.remove("transform");
    body.classList.remove("overflow");
  }
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".burger-menu") && !e.target.closest(".menu-burger")) {
    menuBurger.classList.remove("transform");
    burgerMenu.checked = false;
    body.classList.remove("overflow");
  }
});

const dropMenu = document.querySelectorAll(".drop-list-menu");
const dropMenuHide = document.querySelectorAll(".drop-menu-in-burger");
dropMenu.forEach((item, idx) => {
  item.addEventListener("click", () => {
    dropMenuHide[idx].classList.toggle("display-blosk");
  });
});
