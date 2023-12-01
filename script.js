var cancel = document.querySelector(".close")
var hamburger = document.querySelector(".open")
var navItem = document.querySelector(".nav-item")
var toggleNavIcon = document.querySelector(".open-and-close-icon")

//---------- TOGGLE NAV ITEM ----------
function toggleNav(){
    cancel.classList.toggle("show-close")
    hamburger.classList.toggle("hide-open")
    navItem.classList.toggle("show-nav-item")
}
toggleNavIcon.addEventListener("click", toggleNav)