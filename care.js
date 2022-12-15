let url = "https://636c099fad62451f9fc24305.mockapi.io/bur";
async function data(){
    try{
        let res= await fetch(url);
        let newData = await res.json();
        // return newData;
        displayData(newData)
    }catch(err){
        alert("Fetch Error")
    }    
}
data()
function displayData(res){
  res.forEach((ele) =>{

    let img= document.createElement("img")
    img.src = ele.img;
    img.addEventListener("click",()=>{
      localStorage.setItem("cardDetail",JSON.stringify(ele))
    //   alert("hii")
      location.href = "cardpg.html"  
    })
   document.getElementById("cate").append(img)
  })
}
