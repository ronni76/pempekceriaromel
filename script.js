// =======================
// MENU MOBILE
// =======================

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");


menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("show");

});



// Tutup menu setelah klik link

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show");

    });

});





// =======================
// HEADER SCROLL EFFECT
// =======================

const header = document.getElementById("header");


window.addEventListener("scroll", () => {


    if(window.scrollY > 50){

        header.style.background = "#0d47a1";

    }else{

        header.style.background = "#1565c0";

    }


});






// =======================
// BACK TO TOP
// =======================


const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }


});



topBtn.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});






// =======================
// DARK MODE
// =======================


const darkToggle = document.getElementById("dark-toggle");



darkToggle.addEventListener("click",()=>{


    document.body.classList.toggle("dark");



    if(document.body.classList.contains("dark")){


        darkToggle.textContent="☀️";


        localStorage.setItem("darkMode","on");


    }else{


        darkToggle.textContent="🌙";


        localStorage.setItem("darkMode","off");


    }


});





// Cek mode terakhir pengguna


if(localStorage.getItem("darkMode") === "on"){


    document.body.classList.add("dark");


    darkToggle.textContent="☀️";


}







// =======================
// SCROLL ANIMATION
// =======================


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


},{


    threshold:0.15


});



document.querySelectorAll(

".card, .box, .testi-card, .faq-item, .trust-item"

).forEach(el=>{


    observer.observe(el);


});
