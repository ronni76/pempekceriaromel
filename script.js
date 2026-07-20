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
