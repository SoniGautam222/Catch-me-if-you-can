var box=document.getElementById('box');

box.addEventListener('mouseover', function(){
    
box.style.top=Math.floor(Math.random() * (window.innerHeight)-8) + "px";
box.style.left=Math.floor(Math.random() * (window.innerWidth)-8) + "px";
})



