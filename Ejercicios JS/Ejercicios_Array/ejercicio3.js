/**
 * Calculadora re sencilla
 */

const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2)
}
const restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2)
}
const multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2)
}
const dividir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2)
}

alert("¿Qué operación deseas realizar?")
let operacion = prompt ("1. Suma, 2. Resta, 3. Multiplicación, 4. División")

if (operacion == 1){
    let numero1 = prompt("Ingresa primer número para sumar")
    let numero2 = prompt("Ingresa segundo número para sumar")
    resultado =  sumar(numero1, numero2)
} else if (operacion == 2){
    let numero1 = prompt("Ingresa primer número para restar")
    let numero2 = prompt("Ingresa segundo número para restar")
    resultado =  restar(numero1, numero2)
} else if (operacion == 3){
    let numero1 = prompt("Ingresa primer número para multiplicar")
    let numero2 = prompt("Ingresa segundo número para multiplicar")
    resultado =  multiplicar(numero1, numero2)
} else if (operacion == 4){
    let numero1 = prompt("Ingresa primer número para dividir")
    let numero2 = prompt("Ingresa segundo número para dividir")
    resultado =  dividir(numero1, numero2)
} else {alert("Error. Intenta de nuevo")}

document.write (`<h1>${resultado}</h1>`)


