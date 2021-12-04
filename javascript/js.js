const callMain = document.querySelector(".call-main");
const phoneField = document.querySelector(".phoneField");
const closePhone = document.querySelector(".closePhone");
const inputPhone = document.querySelector(".inputPhone")
const leaderBtn = document.querySelector(".leader-button")
let formFilling = document.querySelector(".help-section__right")

let currentInfo = document.querySelector(".currentInfo")
let hiddenLeaderInfo = document.querySelector(".hiddenLeaderInfo")
const closeLeader = document.querySelector(".closeLeader")

let form_name = document.querySelector(".form-name");
let form_email = document.querySelector(".form-email");
let form_phone = document.querySelector(".form-phone");

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


// using database to add request for clarification
formFilling.addEventListener("submit",(e)=>{
   e.preventDefault()

   if(form_email.value !== "" &&form_name.value !== "" &&form_phone.value !== ""){
       requestUser()
       form_phone.value = ""
       form_name.value = ""
       form_email.value = ""
   }else{
    if(form_phone.value == ""){
        form_phone.style.border = "2px solid red"
    }else{
     form_phone.style.borderColor = "transparent"
    }
    
    if(form_email.value == ""){
     form_email.style.border = "2px solid red"
    }else{
     form_email.style.borderColor = "transparent"
    }
 
    if(form_name.value == ""){
     form_name.style.border = "2px solid red"
    }else{
     form_name.style.borderColor = "transparent"
    }
   }

})

function requestUser(){
    let user = {
        phoneNum:form_phone.value,
        name:form_name.value,
        email:form_email.value
    }    
    fetch("https://online-course-df053-default-rtdb.firebaseio.com/.json",{
        method: 'PUT',
        headers:{
        'Content-Type':'application/json'
        },
        body: JSON.stringify(user)
    })
      .then(res=>{
          alert(JSON.stringify(user))
      })
      .catch(error => console.log(error))

}


