/**
 * Un chico tiene S/3 y tiene que comprar cuantos boletos de lotería le alcancen, si sobra, debe regalar el vuelto.
 * Debe mostrar que compró y el vuelto
 */

 loteria = 0.7
 comprador = prompt ("Ingresa el monto que tienes")
 vuelto = (comprador%loteria).toFixed(2) // lo que calcula aquí es el saldo de la división del monto del comprador
 // sobre el precio de la lotería y con toFixed se limita a dos decimales.
 
 if (comprador < loteria) {
     document.write ("No puedes comprar")
 } else if (comprador > loteria && comprador < loteria*2) {
    document.write ("Puedes comprar 1 loteria <br>")
    document.write (`El vuelto es ${vuelto}`)
} else if (comprador == loteria*2) {
    document.write ("Puedes comprar 2 loterias")
} else if (comprador > loteria*2 && comprador < loteria*3) {
    document.write ("Puedes comprar 2 loterias <br>")
    document.write (`El vuelto es ${vuelto}`)
} else if (comprador == loteria*3) {
    document.write ("Puedes comprar 3 loterias")
} else {
    document.write ("Puedes comprar 3 loterias <br>")
    document.write (`Regalas el vuelto: ${vuelto}`)
}