let botomElem = document.getElementById("boton-cambiar-cita");
let citaElem = document.getElementById("cita");
let autorElem = document.getElementById("autor");

//Generamos un entero aleatorio
function generarEnteroAleatorio(min, max) {
    return Math.floor(Math.random() * (max- min) + min);
}

let indiceAleatorio = generarEnteroAleatorio(0,citas.length);

function cambiarCita() {
    let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
    citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
    autorElem.innerText = citas[indiceAleatorio].autor;
}

cambiarCita();

botomElem.addEventListener("click",cambiarCita);

// function aleatorio(inferior, superior) {
//     var numPosibilidades = superior - inferior;
//     var aleatorio = Math.random() * (numPosibilidades + 1);
//     aleatorio = Math.floor(aleatorio);
//     return inferior + aleatorio;
// }

// console.log(aleatorio(0,5));