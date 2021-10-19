/**
 * Sistema para entrar en la fiesta
 * Dejar entrar solo a los mayores de 18
 * El primero que entre después de las 2am no paga
 */


let free = false

validarCliente = (time)=> {
    let edad = prompt ("¿Cuántos años tienes?")
    if (edad >= 18) {
        if (time >= 2 && time < 7 && !free) {
            alert ("Puedes pasar gratis, porque eres la primera persona después de las 2am")
            free = true
        } else {
            alert (`Son las ${time}:00 horas y puedes pasar, pero tienes que pagar la entrada`)
        }
    }
    else { alert ("No puedes entrar")}
}

validarCliente (2);
validarCliente (8);
validarCliente (3);
