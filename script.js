const hamburger = document.querySelector(".hamburger");
const hamList = document.querySelector(".ham-li");
const shop = document.getElementById("shop");
hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle("active");
    hamList.classList.toggle("active");
    shop.classList.toggle("none");
});