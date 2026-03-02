window.addEventListener("scroll", function() {
    const header = document.getElementById('header');
    header.classList.toggle("scrolled", window.scrollY);
})

window.addEventListener("scroll", function(){
    const elemento = document.getElementById("catalogo");
    if (window.scrollY >= 200){
        elemento.classList.remove("producto");
        elemento.classList.add("producto1");
    }
    else{
        elemento.classList.remove("producto1");
        elemento.classList.add("producto");
    }
})

/* puntero*/
const puntero= document.getElementById("punto");

window.addEventListener("mousemove",e=>{
mouseX = e.clientX;
mouseY = e.clientY;
puntero.style.left = mouseX + 'px';
puntero.style.top = mouseY + 'px';
})






