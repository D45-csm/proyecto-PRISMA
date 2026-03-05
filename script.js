/* puntero*/

/*revisado por el instructor Yonatan*/
const puntero= document.getElementById("punto");

window.addEventListener("mousemove",e=>{
mouseX = e.clientX;
mouseY = e.clientY;
puntero.style.left = mouseX + 'px';
puntero.style.top = mouseY + 'px';
})

/* barra progreso */
const barraArriba = document.getElementById("progress-bar")

function barraProgreso(){
    const alturaPantalla = window.scrollY;
    const restaAltura = document.documentElement.scrollHeight - window.innerHeight;
    const  porcentaje = ( alturaPantalla / restaAltura) *100;
    barraArriba.style.width = porcentaje + "%"
}

window.addEventListener("scroll", barraProgreso)

