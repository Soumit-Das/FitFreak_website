

// Creating the login function

let Login_btn = document.querySelector(".Person_icon")
let get_otp_btn = document.querySelector(".otp_div")
let submit_btn = document.querySelector(".Submit_login")
let already_loged_in = 0


Login_btn.addEventListener("click",function loginfun(){
    // alert("Login button is working")
    if(already_loged_in == 0){

        document.querySelector(".logindiv").style.visibility = "visible"
        submit_btn.style.marginTop = "55px"
        already_loged_in++
    }else{
        window.location.href = "/profile.html"
    }
// window.addEventListener("scroll",noscroll)
// function noscroll(){
//     window.scrollTo(0,0)

// }


    // alert("login")

    // document.querySelector(".logindiv").style.animation = "animation: 0.3s ease 0s 1 normal none running animation-ngigez"
    // document.querySelector(".logindiv").style.transition = "all 1s ease-in-out 0s"
    

    function getfun(){
        get_otp_btn.innerHTML = `
        
        <button class="get_otp">Get OTP</button>
    
        `   
    }
    getfun()


// let ran;
// let ss = 0;
// form = document.querySelector(".Submit_login")
// form.addEventListener("click", (event) => {
//     event.preventDefault();

//     let x = document.querySelector(".login_email").value;
//     ss = ss + 1;
  
//         if (x.length <= 9 || x.length > 10) {
//             alert("Invalid number")
//         }
//         else {

//             let a = Math.floor(Math.random() * 9000 + 1000);

//             alert("Your Otp is " + a)
//             ran = a
//             console.log(ran)
//             document.querySelector("#new").style.display = "block"
//             document.querySelector("#sub").value = "Confirm OTP"
//             document.querySelector("#sub").style.backgroundColor = "green"
            

//         }


    let getotp = document.querySelector(".get_otp")
    
    getotp.addEventListener("click",function getotpfun(){
        // alert("Soumit")
        
        
        submit_btn.style.marginTop = "15px"

        let x = document.querySelector(".login_email").value;
        // alert(x.length)
        // ss = ss + 1;
      
            if (x.length <= 9 || x.length > 10) {
                alert("Invalid number")
            }
            else {
    
                let a = Math.floor(Math.random() * 9000 + 1000);
                alert(a)
                get_otp_btn.innerHTML = ""
                get_otp_btn.innerHTML = `
        
                <input type="number" class="otp_login" placeholder="Enter your OTP">
                
                `
                // submit_btn.style.marginTop = "15px"


                
                
                
                let submit_btn = document.querySelector(".Submit_login")
                submit_btn.addEventListener("click",function verify_otp(){
                    let otp_value = document.querySelector(".otp_login").value
                      
                    if(Number(otp_value) == a){
                        alert("Login Successfull")
                        document.querySelector(".logindiv").style.visibility = "hidden"
                        window.location.href = "/profile.html"
                    }
                    else{
                        alert("Invalid OTP")
                        console.log(otp_value)
                        document.querySelector(".logindiv").style.visibility = "hidden"
                    }

                })

                // alert("Your Otp is " + a)
                // ran = a
                // console.log(ran)
                // document.querySelector("#new").style.display = "block"
                // document.querySelector("#sub").value = "Confirm OTP"
                // document.querySelector("#sub").style.backgroundColor = "green"
                
    
            }

        
    })
})



// get otp btn






// let bag = []
// let ran;
// let ss = 0;
// form = document.querySelector(".Submit_login")
// form.addEventListener("click", (event) => {
//     event.preventDefault();

//     let x = document.querySelector(".login_email").value;
//     ss = ss + 1;
//     if (ss == 1) {
//         if (x.length <= 9 || x.length > 10) {
//             alert("Invalid number")
//         }
//         else {

//             let a = Math.floor(Math.random() * 9000 + 1000);

//             alert("Your Otp is " + a)
//             ran = a
//             console.log(ran)
//             document.querySelector("#new").style.display = "block"
//             document.querySelector("#sub").value = "Confirm OTP"
//             document.querySelector("#sub").style.backgroundColor = "green"
            

//         }
//     } else {
//         let otpv = document.querySelector("#otpval").value
//         if (otpv == ran) {
//             console.log(ran)
//             alert(ran)
//             console.log(otpv)
//             ss = 0;
//             document.querySelector("#veri").style.display = "block"
//             setTimeout(() => {

//                 location.href = "index.html"
//             }, 2000)
//         } else {
//             alert("Wrong OTP")
//         }
//     }
// })



let close_login = document.querySelector(".Close_btn")

close_login.addEventListener("click",function loginfun(){
    // alert("Login_close button is working")
    document.querySelector(".logindiv").style.visibility = "hidden"
    
//    removeEventListener("scroll", noscroll)

})