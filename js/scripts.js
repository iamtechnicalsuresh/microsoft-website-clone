const humburger = document.querySelector(".humburger");
const navlinks = document.querySelector(".navlinks");
const menuBars = document.querySelector(".fa-bars");

const dropdown = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".dropdown-menu");

const footerDate = document.querySelector(".date");

humburger.addEventListener("click", (e) => {
  navlinks.classList.toggle("navlinks-open");
  menuBars.classList.toggle("fa-times");
});

dropdown.addEventListener("click", () => {
  dropdownMenu.classList.toggle("dropdown-menu-open");
});

const currentYear = new Date().getFullYear();
footerDate.innerHTML = currentYear;
