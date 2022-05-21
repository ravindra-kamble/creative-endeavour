const mbNavBtn = document.querySelector(".mobile-nav-btn");
const mbNavBtn_Close = document.querySelector(".mobile-nav-close-btn");
const mbNav = document.querySelector("nav");

// nav button toggle event

mbNavBtn_Close.classList.add("activeElement");
mbNavBtn.addEventListener("click", function(){
   mbNav.style.transform="translateX(0%)";
   mbNavBtn.classList.toggle("activeElement");
   mbNavBtn_Close.classList.toggle("activeElement");
})

mbNavBtn_Close.addEventListener("click", function(){
    mbNav.style.transform="translateX(100%)";
    mbNavBtn.classList.toggle("activeElement");
    mbNavBtn_Close.classList.toggle("activeElement");
 })

// custom code from here 

let sel_img = document.querySelectorAll(".image");
let newImage = document.createElement('img');
let sketchZoom = document.querySelector(".full-img");
let zoomCloseBtn = document.querySelector(".zoom-close-btn");
sel_img.forEach((img)=>{

   img.addEventListener("click", function(){
      console.log("clicked");
      newImage.src=img.src;
      sketchZoom.appendChild(newImage);
      sketchZoom.classList.add("show-element");
      zoomCloseBtn.classList.add("show-element");

   });
})

zoomCloseBtn.addEventListener("click", function(){
   sketchZoom.classList.remove("show-element");
   zoomCloseBtn.classList.remove("show-element");
})


let viewMore = document.querySelector(".view-more");

let ImgGall2 = document.querySelector(".img-gallery-container2");

viewMore.addEventListener("click", function(){
   ImgGall2.classList.toggle("display-block");
   viewMore.classList.add("display-none");
})