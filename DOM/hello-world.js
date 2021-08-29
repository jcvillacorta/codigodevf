let listaDinamica = document.getElementsByTagName("p")
console.log (listaDinamica);

let listaEstatica = document.querySelector("p")
console.log (listaEstatica);

let nuevoParrafo = document.createElement("p");
nuevoParrafo.innerHTML = "nuevo parrafo";
document.body.appendChild(nuevoParrafo);