// Escribe un programa que liste las propiedades de un objeto

var transformer = {
    faccion: "Autobot",
    subclase: "Dinobot",
    nombre: "Grimlock",
    Ataque: 80,
    Defensa: 95,
    Velocidad: 30,
}

var keys = Object.keys(transformer);
console.log(keys);

//Escribir un programa que borre la propiedad rollno del siguiente objeto. Y que también imprima el objeto antes y después de eliminar la propiedad

var estudiante = {
    nombre: "Jhonny Mnemonic",
    sclass: "XIX",
    rollno: 12,
}

console.log(estudiante.rollno);
delete estudiante.rollno;
console.log(estudiante.rollno);