/* puntero*/

/*revisado por el instructor Yonatan*/
const puntero= document.getElementById("punto");

window.addEventListener("mousemove",e=>{
mouseX = e.clientX;
mouseY = e.clientY;
puntero.style.left = mouseX + 'px';
puntero.style.top = mouseY + 'px';
})
