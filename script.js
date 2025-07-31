const btnAbrir = document.querySelector("#Abrir");
const btnCerrar = document.querySelector("#Cerrar");

//abrir carta
btnAbrir.addEventListener("click", ()=>{
    const Elementosuperior = document.querySelector(".superior")
    Elementosuperior.classList.add("abrir-superior"); 

    const h1 =document.querySelector("h1");
    const p =document.querySelector("p");
    h1.style.transform = "translateY(-120px)"; 
    p.style.transform = "translateY(-120px)";
    h1.style.transition = "transform 0.65s ease-in-out";
    p.style.transition = "transform 0.65s ease-in-out";

    const IconoCorazon = document.querySelector(".bxr");
    IconoCorazon.classList.add("bx-rotada"); 

setTimeout(()=>{
    Elementosuperior.style.zIndex = -1;
    const ElementoMensaje = document.querySelector(".mensaje");
    ElementoMensaje.classList.add("abrir-mensaje"); 
}, 700);
});

//Cerrar Carta
btnCerrar.addEventListener("click", () => {
    const Elementosuperior = document.querySelector(".superior"); 

    const ElementoMensaje = document.querySelector(".mensaje");
    ElementoMensaje.classList.remove("abrir-mensaje");

    setTimeout(()=>{
        const h1 =document.querySelector("h1");
    const p =document.querySelector("p");
    h1.style.transform = "translateY(0px)"; 
    p.style.transform = "translateY(0px)";

    const IconoCorazon = document.querySelector(".bxr");
    IconoCorazon.classList.remove("bx-rotada");

    Elementosuperior.style.zIndex = 0;
    Elementosuperior.classList.remove("abrir-superior");
}, 700);
});

//con click contenedor
const contenedor = document.querySelector("#AbrirContenedor");
contenedor.addEventListener("click", ()=>{
    const Elementosuperior = document.querySelector(".superior")
     Elementosuperior.classList.add("abrir-superior"); 

    const h1 =document.querySelector("h1");
    const p =document.querySelector("p");
    h1.style.transform = "translateY(-120px)"; 
    p.style.transform = "translateY(-120px)";
    h1.style.transition = "transform 0.65s ease-in-out";
    p.style.transition = "transform 0.65s ease-in-out";

    const IconoCorazon = document.querySelector(".bxr");
    IconoCorazon.classList.add("bx-rotada"); 

setTimeout(()=>{
    Elementosuperior.style.zIndex = -1;
    const ElementoMensaje = document.querySelector(".mensaje");
    ElementoMensaje.classList.add("abrir-mensaje"); 
}, 700);
});