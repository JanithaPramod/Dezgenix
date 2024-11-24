const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('.navbar-list');

menuIcon.onclick = () => {

    menuList.classList.toggle('active');
    menuIcon.classList.toggle('active');

} 

// sticky navbar

const header = document.querySelector("header");
window.addEventListener("scroll",function(){

    header.classList.toggle("sticky",window.scrollY > 50)

})

// parallax

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            
            entry.target.classList.add("show-items");

        }else{

            entry.target.classList.remove("show-items");

        }
    });

})

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));


function webdev(){

    window.location = "webdev.html";

}

function graphic(){

    window.location = "graphic.html";

}