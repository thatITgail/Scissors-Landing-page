const overlay = document.querySelector(".wrapper")
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const sidebar = document.querySelector(".scissors-nav-list-container");

menuOpen.addEventListener("click", () => {
  sidebar.classList.add("open");
  menuClose.classList.add("open");
  overlay.classList.add("active")
})

menuClose.addEventListener("click", () => {
  sidebar.classList.remove("open");
  menuClose.classList.remove("open");
  overlay.classList.remove("active")
})

