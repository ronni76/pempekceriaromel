window.addEventListener("load", () => {

document.body.style.opacity="1";

});

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
const angka=document.querySelectorAll(".stat-box h2");

angka.forEach(item=>{

item.style.opacity="0";

setTimeout(()=>{

item.style.opacity="1";

},700);

});
// Menu HP

const toggle=document.getElementById("menu-toggle");

const nav=document.getElementById("navbar");

toggle.addEventListener("click",()=>{

nav.classList.toggle("show");

});

// Navbar berubah warna saat scroll

const header=document.getElementById("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});
/* ===========================
HERO SLIDER
=========================== */

const slides=document.querySelectorAll(".hero-slide");

let current=0;

setInterval(()=>{

slides[current].classList.remove("active");

current++;

if(current>=slides.length){

current=0;

}

slides[current].classList.add("active");

},4000);

/* ===========================
ANIMASI CARD
=========================== */

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});
