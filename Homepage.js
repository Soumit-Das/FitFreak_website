

// Creating the login function

let Login_btn = document.querySelector(".Person_icon")

Login_btn.addEventListener("click",function loginfun(){
    // alert("Login button is working")
    document.querySelector(".logindiv").style.visibility = "visible"
    // document.querySelector(".logindiv").style.animation = "animation: 0.3s ease 0s 1 normal none running animation-ngigez"
    // document.querySelector(".logindiv").style.transition = "all 1s ease-in-out 0s"


})

let close_login = document.querySelector(".Close_btn")

close_login.addEventListener("click",function loginfun(){
    // alert("Login_close button is working")
    document.querySelector(".logindiv").style.visibility = "hidden"
    
})