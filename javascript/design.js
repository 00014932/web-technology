let readMore = document.querySelector(".readMore")
let hiddenContent = document.querySelector(".hiddenContent")
let dark = document.querySelector(".dark")

readMore.addEventListener("click", function(){
     hiddenContent.style.clipPath = "circle(100%)"
     dark.style.clipPath = "circle(100%)"
})

dark.addEventListener("click", function(){
    hiddenContent.style.clipPath = "circle(0%)"
    dark.style.clipPath = "circle(0%)"

})