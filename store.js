//////////////////// SLIDER////////////////////

const slide={
    img:["https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/fd72a85d-d0f4-4c42-a6ca-388d49e09bb5.png",
            "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/ba218024-d957-4b3f-9b77-3ee55d913beb.png",
            "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/ba218024-d957-4b3f-9b77-3ee55d913beb.png",
            "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/89af0281-a833-4383-b04f-cfcaeec7a0f0.png",
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

// PRODUCTS TSHIRT//////
const tprodat=[
    {img:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/mcFkm6K2JzvBewYumhjHk3Se",
        tag:"cultsportone", head:"Solid Active Tshirt with Logo",price:"$449"},
    {img:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/gyEKit98fH6VGSZ2jv1fFkSm",
    tag:"cultsportone",head:"Textured Performance Tshirt with Logo",price:"$499" },
    {img:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/bosN4oiAvgN9CuiGygunnAMK",
        tag:"CULTSPORTONE", head:"Logo Play Chest Print Active Tshirt", price:"$499"},
    {img:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/dRhEunW8VRaXpjebkkK1KVUZ",
    tag:"CULTSPORT", head:"Glitch Logo Active T-shirt", price:"$824"}
]

function displaytproData(){
    let cont=document.getElementById("tpro");
tprodat.forEach(function (el,i){
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=el.img;
    img.style.borderRadius="20px"
    let tag=document.createElement("p");
    tag.style.color="grey"
    tag.innerText=el.tag
    let head=document.createElement("h5");
    head.innerText=el.head
    head.style.fontSize="15px"
    // head.style.fontWeight="lighter"
    let pri=document.createElement("h6");
    pri.innerText=el.price;
    pri.style.fontSize="20px"
    pri.style.fontWeight="lighter"
    pri.style.color="rgb(49,46,53)"   
    div.append(img,tag,head,pri)
    cont.append(div)
})
}
displaytproData()

/////////////////////////////// products Cycles///////////////////////////
const cprodata=[
    {img:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/q1S4DwudvD6D86TUcuSikyUZ",
        tag:"urban terrain", head:"UT1000, Black, Steel MTB 27.5 T Shimano Geared Mountain Cycle", price:"$12990"},
    {img:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/mRmDRFA389Zo8n23tVRCvmty",
        tag:"urban terrain",
    head:"UT2000, Red, Steel MTB 27.5 T Shimano Geared Mountain Cycle (21 Gear)",
    price:"$12999"},
    {img:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/vtg2iiscHQwMC3K1Dd6C8ztf",
    tag:"urban terrain",
    head:"UT1001, Blue, Steel MTB 27.5 T Shimano Geared Mountain Cycle (21 Gear)",
    price:"$1299"},
    {img:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/9Lfs1QsnEAApo4epJb1A27Y4",
    tag:"urban terrain",
    head:"UT3013S27.5, Black, Steel MTB 27.5 T Shimano Geared Mountain Cycle",
    price:"11999$"},
]
    function displayCpro(){
        let cont=document.getElementById("cycles");
        cprodata.forEach(function (el,i){
            let div=document.createElement("div");
            let img=document.createElement("img");
            img.src=el.img;
            img.style.borderRadius="20px"
            let tag=document.createElement("p");
            tag.style.color="grey"
            tag.innerText=el.tag
            let head=document.createElement("h5");
            head.innerText=el.head
            head.style.fontSize="15px"
            // head.style.fontWeight="lighter"
            let pri=document.createElement("h6");
            pri.innerText=el.price;
            pri.style.fontSize="20px"
            pri.style.fontWeight="lighter"
            pri.style.color="rgb(49,46,53)"   
            div.append(img,tag,head,pri)
            cont.append(div)
        })
        }
    displayCpro()
    const proSpinBikes=[
        {img:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/e9Wb3Gqi3hVBp4rxYHZvYm8c",
        tag:"fitkit",
    head:"FK3000 (13.2lbs Flywheel) with Free Installation Spinner Exercise Bike",
    price:"1179$"},
    {img:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/nTvMdcZi5B2MzrXZJicv7acr",
        tag:"CULTSPORT",
    head:"Smartbike c2: Bluetooth enabled spin bike with stepless magnetic resistance",
    price:"23499$"},
    {img:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/KeDrqEPZbJgL4uhactfj1qtz",
        tag:"oneFitPlus",
    head:"OFP-1000, 8 Level Magnetic Resistance Spin Bike",
    price:"16199$"},
    // {img:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/yHz1nfjmiafpYRHeTMiBfB9A",
    //     tag:"fitkit",
    // head:"FITKIT FK2000 (13.22lbs Flywheel) With Free Installation, Trainer Led Sessions Spinner Exercise Bike (Orange)",
    // price:"1899$"}
    ]

    function SpinBikes(){
        let cont=document.getElementById("spin");
        proSpinBikes.forEach(function (el,i){
            let div=document.createElement("div");
            let img=document.createElement("img");
            img.src=el.img;
            img.style.borderRadius="20px"
            let tag=document.createElement("p");
            tag.style.color="grey"
            tag.innerText=el.tag
            let head=document.createElement("h5");
            head.innerText=el.head
            head.style.fontSize="15px"
            // head.style.fontWeight="lighter"
            let pri=document.createElement("h6");
            pri.innerText=el.price;
            pri.style.fontSize="20px"
            pri.style.fontWeight="lighter"
            pri.style.color="rgb(49,46,53)"   
            div.append(img,tag,head,pri)
            cont.append(div)
        })
        }
        SpinBikes()