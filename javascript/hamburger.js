let menuHamburger = document.querySelector(".menuHamburger")
let ul = document.querySelector(".ulMenu")
let darkMode = document.querySelector(".darkMode")


menuHamburger.addEventListener("click", function(){
    ul.classList.toggle("appearMenu")
    darkMode.classList.toggle("appearDarkMode")
})

darkMode.addEventListener("click", function(){
    ul.classList.remove("appearMenu")
    darkMode.classList.remove("appearDarkMode")
})