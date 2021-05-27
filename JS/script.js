/*Script that handles mobile navbar menu*/
const button = document.getElementsByClassName("mobile-nav-menu-button")[0]
const navbarMenu = document.getElementsByClassName("navbar-links")[0]

button.addEventListener("click", () => {
  navbarMenu.classList.toggle("active")
})