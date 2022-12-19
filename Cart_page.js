let count = 1
let cartbag = 0
let Carts = JSON.parse(sessionStorage.getItem("cart_Data")) || []
// displayCart(Carts)
console.log(Carts)

// localStorage.clear()

// function displayCart(Carts){
//     // bag.forEach()
//     document.querySelector(".cartcontainer").innerText = "";
//     Carts.forEach((ele,index)=>{

//       let divs = document.createElement("div")
  
//      let image = document.createElement("img")
//       image.setAttribute("src",ele.img)
  
//       let company = document.createElement("h2")
//       company.innerText = ele.name
  
//       let cost = document.createElement("h3")
//       cost.innerText = ele.price
  
      
      

//       let btn3 = document.createElement("button")
//       btn3.innerText = "Remove"
//       btn3.addEventListener("click",()=>{
//         delfun(ele,index)
//       })


//       // console.log(Carts.length*ele.price)
//       // let totalCost =  Carts.length*ele.price
//       // cartbag = ele.price*count
  
//     //  console.log("a")
//   // console.log(cost.textContent+"S")
//     //  console.log(cartbag+"S")
//      divs.append(image,company,cost)
//      document.querySelector(".cartcontainer").append(divs)
  
    
//     })
//   }
  function delfun(ele,index){
    Carts.splice(index,1)
    console.log(Carts)
    displayCart(Carts)
    localStorage.setItem("CartItems",JSON.stringify(Carts))
  }
   

let sum = 0

  Totaldisplay(Carts)
  function Totaldisplay(Carts){
    document.querySelector("tbody").innerText = "";
Carts.forEach((ele,index)=>{


let row = document.createElement("tr")

let imgdetails = document.createElement("img")
imgdetails.setAttribute("src",ele.img)
imgdetails.style.height = "100px"
imgdetails.style.width = "80px"
imgdetails.style.padding = "10px"


let names = document.createElement("p")
names.innerText = ele.name
names.style.paddingLeft = "20px"
names.style.paddingTop = "20px"

let td1 = document.createElement("td")
td1.append(imgdetails,names)
td1.style.display = "flex"

let td2 = document.createElement("td")
td2.innerText = ele.price
td2.style.paddingLeft = "20px"
td2.style.paddingRight = "20px"
td2.style.borderLeft = "1px solid black"

row.append(td1,td2)
document.querySelector("tbody").append(row)

sum = sum + ele.price
// console.log(sum)


})
document.querySelector("#Subtotal").append(sum)

  }

 function Checkoutfun(){
  localStorage.setItem("Carttotal",sum)
window.location.assign("Checkout.html")

 }








