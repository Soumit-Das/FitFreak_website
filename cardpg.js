arr = JSON.parse(localStorage.getItem("cardDetail"))

// let arr2 = []

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

 sessionStorage.setItem("cart_Data",JSON.stringify(arr))
 alert("Added to cart")
})
loader = document.querySelector("#loader")
main = document.querySelector("#main")
window.onload = () => {
main.style.display="none"
loader.style.display="flex"
setTimeout(()=>{
  main.style.display="block"
  loader.style.display="none"
},1000)
};