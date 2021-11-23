const callMain = document.querySelector(".call-main");
const phoneField = document.querySelector(".phoneField");
const closePhone = document.querySelector(".closePhone");
const inputPhone = document.querySelector(".inputPhone")
const leaderBtn = document.querySelector(".leader-button")


let currentInfo = document.querySelector(".currentInfo")
let hiddenLeaderInfo = document.querySelector(".hiddenLeaderInfo")
const closeLeader = document.querySelector(".closeLeader")


leaderBtn.addEventListener("click",()=>{
    currentInfo.classList.toggle("disappearLeaderInfo")
    hiddenLeaderInfo.classList.toggle("activeMe")
})
closeLeader.addEventListener("click",()=>{
    currentInfo.classList.toggle("disappearLeaderInfo")
    hiddenLeaderInfo.classList.toggle("activeMe")
})
callMain.addEventListener("click", function(){
   phoneField.classList.toggle("phoneFieldActive")
   this.classList.toggle("disActivePhone")
})

closePhone.addEventListener("click", function(){
    phoneField.classList.toggle("phoneFieldActive")
   callMain.classList.toggle("disActivePhone")
})

phoneField.addEventListener("submit", function(e){
    e.preventDefault()
    if(inputPhone.value != ""){
        alert("thanks for having interest in our company we will reach as soon as possible")
        phoneField.classList.toggle("phoneFieldActive")
        callMain.classList.toggle("disActivePhone")
        inputPhone.value = ""
    }else{
        alert("please enter your phone-number")
    }
})

leaderBtn.addEventListener("click", function(){

})