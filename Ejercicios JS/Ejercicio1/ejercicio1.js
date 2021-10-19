/*montoRoberto = prompt ("Roberto, ingresa cuánto dinero tienes")
montoPedro = prompt ("Pedro, ingresa cuánto dinero tienes")
montoCofla = prompt ("Cofla, ingresa cuánto dinero tienes")

montoCofla = parseInt(montoCofla) // lo que se ingresa por prompt no se considera un número, por tanto tenemos que pasarlo a número

if (montoRoberto >=0.6 && montoRoberto<1) {
    alert ("Roberto, cómprate el helado de agua")
}
else if (montoRoberto >=1 && montoRoberto<1.6) {
    alert ("Roberto, cómprate el helado de crema")
}
else if (montoRoberto >=1.6 && montoRoberto<1.7) {
    alert ("Roberto, cómprate el heladix")
}
else if (montoRoberto >=1.7 && montoRoberto<1.8) {
    alert ("Roberto, cómprate el heladovich")
}
else if (montoRoberto >=1.8 && montoRoberto<2.9) {
    alert ("Roberto, cómprate el helardo")
}
else if (montoRoberto >=2.9) {
    alert ("Roberto, cómprate el helado con confites o un pote de 1.4kg de helado")
}
else {
    alert ("Roberto, lárgate de aquí pobre de mierda")
}

if (montoPedro >=0.6 && montoPedro<1) {
    alert ("Pedro, cómprate el helado de agua")
}
else if (montoPedro >=1 && montoPedro<1.6) {
    alert ("Pedro, cómprate el helado de crema")
}
else if (montoPedro >=1.6 && montoPedro<1.7) {
    alert ("Pedro, cómprate el heladix")
}
else if (montoPedro >=1.7 && montoPedro<1.8) {
    alert ("Pedro, cómprate el heladovich")
}
else if (montoPedro >=1.8 && montoPedro<2.9) {
    alert ("Pedro, cómprate el helardo")
}
else if (montoPedro >=2.9) {
    alert ("Pedro, cómprate el helado con confites o un pote de 1.4kg de helado")
}
else {
    alert ("Pedro, lárgate de aquí pobre de mierda")
}

if (montoCofla >=0.6 && montoCofla<1) {
    alert ("Cofla, cómprate el helado de agua")
    alert ("y te sobran " +  (montoCofla - 0.6))
}
else if (montoCofla >=1 && montoCofla<1.6) {
    alert ("Cofla, cómprate el helado de crema")
    alert ("y te sobran " +  (montoCofla - 1))
}
else if (montoCofla >=1.6 && montoCofla<1.7) {
    alert ("Cofla, cómprate el heladix")
    alert ("y te sobran " +  (montoCofla - 1.6))
}
else if (montoCofla >=1.7 && montoCofla<1.8) {
    alert ("Cofla, cómprate el heladovich")
    alert ("y te sobran " +  (montoCofla - 1.7))
}
else if (montoCofla >=1.8 && montoCofla<2.9) {
    alert ("Cofla, cómprate el helardo")
    alert ("y te sobran " +  (montoCofla - 1.9))
}
else if (montoCofla >=2.9) {
    alert ("Cofla, cómprate el helado con confites o un pote de 1.4kg de helado")
    alert ("y te sobran " +  (montoCofla - 2.9))
}
else {
    alert ("Cofla, lárgate de aquí pobre de mierda")
}*/

let clasificaciones = ["Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio"]

document.write("Clasificación Actual: <br>")
for (i = 0; i < clasificaciones.length; i++) {
    a=i+1
    document.write(a+". "+clasificaciones[i]+" <br>");
}

clasificaciones[2]="Celia"
clasificaciones[3]="Raul"
clasificaciones.pop() //sale Antonio, último elemento
clasificaciones.splice(1,0, "Roberto", "Amaya")
clasificaciones.unshift("Marta")

document.write("<br>Clasificación Actual: <br>")
for (i = 0; i < clasificaciones.length; i++) {
    a=i+1
    document.write(a+". "+clasificaciones[i]+" <br>");
}
