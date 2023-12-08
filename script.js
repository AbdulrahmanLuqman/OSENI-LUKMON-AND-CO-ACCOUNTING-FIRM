var cancel = document.querySelector(".close")
var hamburger = document.querySelector(".open")
var navItem = document.querySelector(".nav-item")
var toggleNavIcon = document.querySelector(".open-and-close-icon")
var cover = document.querySelector(".cover")

//---------- TOGGLE NAV ITEM ----------
function toggleNav(){
    cancel.classList.toggle("show-close")
    hamburger.classList.toggle("hide-open")
    navItem.classList.toggle("show-nav-item")
    cover.classList.toggle("show-cover")
}
toggleNavIcon.addEventListener("click", toggleNav)
cover.addEventListener("click", toggleNav)

// ---------- TOGGLE NAV ITEM WHEN I CLICK ON ANY OF THE NAV LINKS ----------
for (let i = 0; i < document.querySelectorAll(".nav-links").length; i++) {
    document.querySelectorAll(".nav-links")[i].addEventListener("click", function(){
        cancel.classList.toggle("show-close")
        hamburger.classList.toggle("hide-open")
        navItem.classList.toggle("show-nav-item")
        cover.classList.toggle("show-cover")
    })

}