//////////////////// SLIDER////////////////////

const slide={
    img:["https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/fd72a85d-d0f4-4c42-a6ca-388d49e09bb5.png",
            "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/ba218024-d957-4b3f-9b77-3ee55d913beb.png",
            "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/ba218024-d957-4b3f-9b77-3ee55d913beb.png",
            "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/fd72a85d-d0f4-4c42-a6ca-388d49e09bb5.png"]
}
let slider=document.getElementById("slide");
let img=document.getElementById("slide_img");
let sli=0
function slideShow(){
    // slide.img.forEach(function (el){
    //     console.log(el)
    // })
    let arr=slide.img;
     img.src=arr[sli];
    // slider.append(img);
   sli++
   if(sli==arr.length-1){
   sli=0;
   }
}
slideShow()
setInterval(slideShow,2000)

////////// Slider/////////////////////