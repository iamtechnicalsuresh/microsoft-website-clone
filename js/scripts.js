const humburger = document.querySelector(".humburger");
const navlinks = document.querySelector(".navlinks");
const menuBars = document.querySelector(".fa-bars");

humburger.addEventListener("click", (e) => {
  console.log("clicked");
  navlinks.classList.toggle("navlinks-open");
  menuBars.classList.toggle("fa-times");
});
