// nav toggle - select button and links
const navToggle = document.querySelector("#navToggle")
const nav = document.querySelector("#nav-links")
const flexNav = document.querySelector(".flex-nav")
const icon = document.querySelector("#navToggle i")
// add event listener
navToggle.addEventListener("click", function() {
    nav.classList.toggle('nav-open')
    flexNav.classList.toggle('open')
    icon.classList.toggle('fa-times')
})