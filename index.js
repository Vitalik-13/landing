const burgerMenu = document.querySelector(".burger-menu");
const menuBurger = document.querySelector(".menu-burger");

burgerMenu.addEventListener("click", () => {
  menuBurger.classList.add("transform");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".burger-menu") && !e.target.closest(".menu-burger")) {
    menuBurger.classList.remove("transform");
  }
});

const dropMenu = document.querySelectorAll(".drop-list-menu");
const dropMenuHide = document.querySelectorAll(".drop-menu-in-burger");
dropMenu.forEach((item, idx) => {
  item.addEventListener("click", () => {
    dropMenuHide[idx].classList.toggle("display-blosk");
  });
});
