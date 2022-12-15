arr = JSON.parse(localStorage.getItem("cardDetail"))

let photu = document.querySelector("#photu");
let disc = document.querySelector("#disc");
let head = document.querySelector(".head");
let heading = document.querySelector("#heading");
let rate = document.querySelector("#rate");
let btn = document.querySelector("#buynow");

let img = document.createElement("img")
img.src = arr.img; 
photu.append(img)

disc.innerText = arr.disc;

head.innerText = arr.name
heading.innerText = arr.name

rate.innerText = "₹ "+arr.price

btn.addEventListener("click",()=>{
 alert("Cartpage???")
})