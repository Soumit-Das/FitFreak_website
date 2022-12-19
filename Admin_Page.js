


// login


// let Login_btn = document.querySelector(".Person_icon")



window.addEventListener("load",function loginfun(){
    // alert("Login button is working")
    document.querySelector(".logindiv").style.visibility = "visible"

let Blur = document.getElementById("blur")
Blur.classList.toggle('active')




// // window.addEventListener("scroll",noscroll)
// // function noscroll(){
// //     window.scrollTo(0,0)

// }


//     // alert("login")

//     // document.querySelector(".logindiv").style.animation = "animation: 0.3s ease 0s 1 normal none running animation-ngigez"
//     // document.querySelector(".logindiv").style.transition = "all 1s ease-in-out 0s"


})

let close_login = document.querySelector(".Close_btn")

close_login.addEventListener("click",function loginfun(){
    // alert("Login_close button is working")
    document.querySelector(".logindiv").style.visibility = "hidden"
    
    // Remove_blur


    // let Remove_Blur = this.document.getElementById("blur")
    // Remove_Blur.classList.remove('active')


//    removeEventListener("scroll", noscroll)

})





let submit_button = document.querySelector(".Submit_login")

submit_button.addEventListener("click",function submitfun(){
    let name = document.querySelector(".login_email").value
    // alert(number)
    if(name == "Soumit" || name =="Amit" || name =="Sonu" || name =="Jaydip" || name =="Lohitash"){
        document.querySelector(".logindiv").style.visibility = "hidden"
        // let Remove_Blur = this.document.getElementById("blur")
        // Remove_Blur.classList.remove('active')
        alert("Welcome Admin")
        let Blur = document.getElementById("blur")
        // Blur.classList.toggle('active')

        if (Blur.classList.contains('active')) {
            Blur.classList.remove('active');
          } 

    }
    else{
        alert("wrong password")
    }
})




    let Stats = document.getElementById("stats")
    let secondOption = document.getElementById("btn1")
    let third_options = document.getElementById("btn2")
    let statistics_body = document.querySelector(".statistics_div")
    let AllProduct_body = document.querySelector(".All_Products_div")
    let AddProduct_body = document.querySelector(".Add_Product_div")
    let Submit_product_btn = document.querySelector(".Add_btn")
    let url = "https://636c099fad62451f9fc24305.mockapi.io/bur"
    

// window.addEventListener("load", (event) => {
//     // alert("page is fully loaded");
  
//     Stats.style.color = "white"
//     secondOption.style.color = "rgb(255 255 255 / 60%)"
//     third_options.style.color = "rgb(255 255 255 / 60%)"
//   });

  Stats.addEventListener("click",function (){
    //  alert("clicked")

    Stats.style.color = "white"
    secondOption.style.color = "rgb(255 255 255 / 60%)"
    third_options.style.color = "rgb(255 255 255 / 60%)"
    statistics_body.style.visibility = "visible"
    AllProduct_body.style.visibility = "hidden"
    AddProduct_body.style.visibility = "hidden"
})

  secondOption.addEventListener("click",function (){
      //  alert("clicked")

    Stats.style.color = "rgb(255 255 255 / 60%)"
    secondOption.style.color = "white"
    third_options.style.color = "rgb(255 255 255 / 60%)"
    statistics_body.style.visibility = "hidden"
    AllProduct_body.style.visibility = "visible"
    AddProduct_body.style.visibility = "hidden"


//  Fetching all data

    async function fetch_all_products(){
        try{
        
            let rawdata = await fetch(url,{
                method: "GET",
                headers:{
                    'Content-Type' : 'application/json'
                }
            })
            if(rawdata.ok){
                // alert("fetch working")
                let convert = await rawdata.json()
                // console.log(convert)
                rendercards(convert)
            }else{
                alert("Fetch is not ok")
            }
        
        }catch(err){
            alert("Err happened")
        }
         
        }
        fetch_all_products()

        function rendercards(cards){
            AllProduct_body.innerHTML = ""


            let all_data_arr = cards.map((item)=>{
                return `
                
                <div class="cards">

                <img width="100%" height="65%" src="${item.img}" alt="">
    
                <h2>${item.name}</h2>
                <p>Price - ${item.price}</p>
                <div class="btndiv">
                   <button class="Edit_btn" data-id=${item.id}>EDIT</button>
                   <button class="delete_btn" data-id=${item.id}>DELETE</button>
                </div>
            </div>
                
                `
            })
            AllProduct_body.innerHTML = all_data_arr.join(" ")

           
            let delte = document.querySelectorAll(".delete_btn") 

             for(let btn of delte){
                btn.addEventListener("click",(event)=>{
                    let data_id = event.target.dataset.id;
                    Delete_fun(data_id)
                })
             }
        }

  })


  third_options.addEventListener("click",function (){
      //  alert("clicked")

    Stats.style.color = "rgb(255 255 255 / 60%)"
    secondOption.style.color = "rgb(255 255 255 / 60%)"
    third_options.style.color = "white"
    statistics_body.style.visibility = "hidden"
    AllProduct_body.style.visibility = "hidden"
    AddProduct_body.style.visibility = "visible"
  })


// Delete method


async function Delete_fun(id){
    try{


let deltefetch = await fetch(`${url}/${id}`,{
    method: "DELETE"
})
if(deltefetch.ok){
    alert("Delete is working")
    // fetch_all_products()
}
else{
    alert("Delete status is 400 err")
}
}catch(err){
    alert("Delete Err")
    }
}


// Edit method

Submit_product_btn.addEventListener("click",function Add(event){
event.preventDefault()
// adding_data()

let all_details = document.querySelectorAll(".forms input")

let obj = {
    [all_details[0].id] : all_details[0].value,
    [all_details[1].id] : all_details[1].value,
    [all_details[2].id] : all_details[2].value,
    [all_details[3].id] : all_details[3].value
}
console.log(obj)
adding_data(obj)
})


async function adding_data(obj){
    try{

// let all_details = document.querySelectorAll(".forms input")

// console.log(all_details)



let req = await fetch(url,{
			method : "POST",
            headers:{
                'Content-Type' : 'application/json'
            },
			body : JSON.stringify(obj)
		})

		if(req.ok){
			// let total_item_per_page = document.querySelector(".select-tag").value;
			// FetchTodoData(total_item_per_page);
            alert("add data is working")
            console.log(req)
		}else{
            alert("req is not ok")
        }
    }catch(err){
     alert("err")
    }
    
}







