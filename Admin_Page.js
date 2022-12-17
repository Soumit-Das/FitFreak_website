

    let Stats = document.getElementById("stats")
    let secondOption = document.getElementById("btn1")
    let third_options = document.getElementById("btn2")
    let statistics_body = document.querySelector(".statistics_div")
    let AllProduct_body = document.querySelector(".All_Products_div")
    let AddProduct_body = document.querySelector(".Add_Product_div")
    let url = "https://636c099fad62451f9fc24305.mockapi.io/bur"
    

window.addEventListener("load", (event) => {
    // alert("page is fully loaded");
  
    Stats.style.color = "white"
    secondOption.style.color = "rgb(255 255 255 / 60%)"
    third_options.style.color = "rgb(255 255 255 / 60%)"
  });

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
                alert("fetch working")
                let convert = rawdata.json()
                console.log(convert)
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
}
else{
    alert("Delete status is 400 err")
}
    }catch(err){
        alert("Delete Err")
    }
}









