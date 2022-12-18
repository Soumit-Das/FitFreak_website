

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
