let menu=document.querySelector('.menu')
let ul=document.querySelector('.ul')

const myfun=()=>{
    ul.classList.toggle('active')
   
}

// Headers end

menu.addEventListener("click",myfun);


function myfuntion(im){
    let img = document.getElementById('main-img');
    img.src=im.src
}

function secondimage(im){
let img =document.getElementById("main-img1");
img.src=im.src
}

function therdimage(im){
    let img =document.getElementById("main-img2");
    img.src=im.src
}


username=localStorage.getItem('Username')
image=localStorage.getItem('image')
document.getElementById('mm').innerHTML=`${username}`














