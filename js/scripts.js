const humburger = document.querySelector(".humburger");
const navlinks = document.querySelector(".navlinks");
const menuBars = document.querySelector(".fa-bars");

const dropdown = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".dropdown-menu");

const searchBox = document.querySelector(".search");
const searchBar = document.querySelector(".search-bar");

const footerDate = document.querySelector(".date");

humburger.addEventListener("click", (e) => {
  navlinks.classList.toggle("navlinks-open");
  menuBars.classList.toggle("fa-times");
});

dropdown.addEventListener("click", () => {
  dropdownMenu.classList.toggle("dropdown-menu-open");
});

searchBox.addEventListener("click", () => {
  searchBar.classList.toggle("search-bar-open");
});

const currentYear = new Date().getFullYear();
footerDate.innerHTML = currentYear;
