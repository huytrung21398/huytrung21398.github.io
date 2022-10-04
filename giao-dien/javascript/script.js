

// Menu item-------------------
// const toP = document.querySelector(".top")
// window.addEventListener("scroll",function(){
//     const X = this.pageYOffset;
//     if(X>1){top.classList.add("active")}
//     else{
//         toP.classList.remove("active")
//     }
// })


// MENU SLIDER CATEGORY------------
const itemSliderBar = document.querySelectorAll(".category-left-li")
itemSliderBar.forEach(function(menu,index){
    menu.addEventListener("click",function(){
        menu.classList.toggle("block")
    })
})
// PRODUCT---------------------
const baoquan = document.querySelector(".baoquan")
const chitiet = document.querySelector(".chitiet")
const kichthuoc = document.querySelector(".kichthuoc")
if(baoquan){
    baoquan.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "block"
        document.querySelector(".product-content-right-bottom-content-kichthuoc").style.display = "none"
    })
}
if(chitiet){
    chitiet.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "block"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-kichthuoc").style.display = "none"
    })
}
if(kichthuoc){
    kichthuoc.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-kichthuoc").style.display = "block"
    })
}
const button = document.querySelector(".product-content-right-bottom-top")
    if(button){
        button.addEventListener("click", function(){
            document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
        })
    }
const bigImg = document.querySelector(".product-content-left-big-img img")
const smallImg = document.querySelectorAll(".product-content-left-small-img img")
smallImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click", function(){
        bigImg.src = imgItem.src
    })
})