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



// zoom image effect from here
 
// image 1
 const zoomBtn =  document.querySelector(".group-btn-zoom1");
 const lbBack = document.querySelector(".lb-back1");
 const closeBtn =  document.querySelector(".lb-img-close-btn1");
 
 zoomBtn.addEventListener("click", function(){

  lbBack.classList.add("show");
  closeBtn.classList.add("show");

 })

//  close image

closeBtn.addEventListener("click", function(){
   console.log("clicked");
  lbBack.classList.remove("show");
  closeBtn.classList.remove("show");
})


// image 2
const zoomBtn2 =  document.querySelector(".group-btn-zoom2");
const lbBack2 = document.querySelector(".lb-back2");
const closeBtn2 =  document.querySelector(".lb-img-close-btn2");

zoomBtn2.addEventListener("click", function(){

 lbBack2.classList.add("show");
 closeBtn2.classList.add("show");

})

//  close image

closeBtn2.addEventListener("click", function(){
 lbBack2.classList.remove("show");
 closeBtn2.classList.remove("show");
})


// image 3
const zoomBtn3 =  document.querySelector(".group-btn-zoom3");
const lbBack3 = document.querySelector(".lb-back3");
const closeBtn3 =  document.querySelector(".lb-img-close-btn3");

zoomBtn3.addEventListener("click", function(){

 lbBack3.classList.add("show");
 closeBtn3.classList.add("show");

})

//  close image

closeBtn3.addEventListener("click", function(){
 
 lbBack3.classList.remove("show");
 closeBtn3.classList.remove("show");
})



//  share button logic

const shareBtn1 = document.querySelector(".share-btn1");
const shareBtn2 = document.querySelector(".share-btn2");
const shareBtn3 = document.querySelector(".share-btn3");

const shareGrp1 = document.querySelector(".share-group1");
const shareGrp2 = document.querySelector(".share-group2");
const shareGrp3 = document.querySelector(".share-group3");

shareBtn1.addEventListener("click",function(){
    shareGrp1.classList.toggle("show-group");
})

shareBtn2.addEventListener("click",function(){
   shareGrp2.classList.toggle("show-group");
})

shareBtn3.addEventListener("click",function(){
   shareGrp3.classList.toggle("show-group");
})







