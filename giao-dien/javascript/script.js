

// Menu item-------------------
// const toP = document.querySelector(".top")
// window.addEventListener("scroll",function(){
//     const X = this.pageYOffset;
//     if(X>1){top.classList.add("active")}
//     else{
//         toP.classList.remove("active")
//     }
// })
// Menu-slider-category------------
const itemSliderBar = document.querySelectorAll(".category-left-li")
itemSliderBar.forEach(function(menu,index){
    menu.addEventListener("click",function(){
        menu.classList.toggle("block")
    })
})