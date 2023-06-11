document.querySelector("form").addEventListener("submit",formsubmission)

let totalprice = localStorage.getItem("Carttotal")
// console.log(totalprice)
function formsubmission(){
    event.preventDefault()
    
let Ctry = document.querySelector("#Countryselect").value
document.querySelector("#country").append(Ctry)

let Ftnm = document.querySelector("#firstname").value


let Ltnm = document.querySelector("#lastname").value
let a = (Ftnm +" "+ Ltnm)
console.log(a)

document.querySelector("#named").append(a)

let Addresse = document.querySelector("#Addresssone").value
document.querySelector("#addresses").append(Addresse)

let Cty = document.querySelector("#cityname").value
document.querySelector("#city").append(Cty)

let pnn = document.querySelector("#pinn").value
document.querySelector("#pin").append(pnn)

let Phne = document.querySelector("#phone").value
document.querySelector("#mobile").append(Phne)

document.querySelector("#Subtotal").append(totalprice)

}


function openPopup(){
    let p = document.querySelector("#Payments").value

    if(p == "Card"){
        
        document.querySelector(".popupform").classList.add("openPopup")

    }
    if(p == "UPI"){
        document.querySelector(".popupform2").classList.add("upiform")
        document.querySelector(".popupform").classList.remove("openPopup")
    }
    if(p == "COD"){
        document.querySelector(".statusbtn").classList.add("visibletrackbtn")
    }

}

function closePopup(){
    document.querySelector(".popupform").classList.remove("openPopup")
    document.querySelector(".PaymentSuccess").classList.add("opensuccess")
}

function closeSuccess(){
    document.querySelector(".PaymentSuccess").classList.remove("opensuccess")
    document.querySelector(".statusbtn").classList.add("visibletrackbtn")
}

function closePopup2(){
    document.querySelector(".popupform2").classList.remove("upiform")
    document.querySelector(".PaymentSuccess").classList.add("opensuccess")
}

function showstatus(){
    document.querySelector(".currentstatus").classList.add("statusdisplay")
    document.querySelector(".statusbtn").classList.remove("visibletrackbtn")

// getting date and month

let months = [
    "January", "February", 
    "March", "April", "May", 
    "June", "July", "August",
    "September", "October", 
    "November", "December"
];

let d = new Date();
let a = d.getDate()+7 + " "
let b = " "+2022
document.getElementById(
    "deliverydate").innerHTML =
     a 
    + months[d.getMonth()] + b;

}

