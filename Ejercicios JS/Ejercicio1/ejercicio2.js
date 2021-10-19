/**
Escribe un programa que responda a un usuario que quiere comprar un helado 
en una conocida marca de comida rápida cuanto le costará en función del topping que elija.

El helado sin topping cuesta 1.90€.
El topping de oreo cuesta 1€.
El topping de KitKat cuesta 1.50€.
El topping de brownie cuesta 0.75€.
El topping de lacasitos cuesta 0.95€.
En caso de no disponer del topping solicitado por el usuario el programa escribirá 
por pantalla «no tenemos este topping, lo sentimos. » y a continuación informar del precio del helado sin ningún topping.
Finalmente, el programa escribe por pantalla el precio del helado con el topping seleccionado (o ninguno).


*/

helado = 1.9
topping = prompt ("Bienvenido a Heladería Paquita ¿Qué topping deseas?")

if (topping == "oreo") {
    document.write (`<h1>Cuesta ${helado+1} euros</h1>`)
}
else if (topping == "kitkat"){
    document.write (`<h1>Cuesta ${helado+1.5} euros</h1>`)
}
else if (topping == "brownie"){
    document.write (`<h1>Cuesta ${helado+0.75} euros</h1>`)
}
else if (topping == "lacasitos"){
    document.write (`<h1>Cuesta ${helado+0.95} euros</h1>`)
}
else if (topping == "ninguno"){
    document.write (`<h1>El helado sin toppings cuesta ${helado} euros</h1>`)
}
else {
    document.write (`<h1>No tenemos este topping, lo sentimos, el precio del helado sin topping es de ${helado} euros</h1>`)
}