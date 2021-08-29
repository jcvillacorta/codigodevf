/*//Try it Yourself
a = 21;
b = a * 2;
console.log(b);

//Variables

var amount = 99.99;
amount = amount * 2;
console.log(amount); 

//convierte "amount" en un string y añade "$" al inicio
amount = "$" + String(amount);
console.log(amount);

//añade impuestos
var iva = 1.18; //18% IVA
var monto = 99.99;
monto = monto * 2;
monto = monto*iva;

console.log(monto);
console.log(monto.toFixed(2));

//Blocks

var precio = 99.99;
// monto suficientemente grande
if (precio>10){
    precio=precio*2;
    console.log(precio);
}

//Conditionals
var estado_de_cuenta= 300;
var precio= 99.99;
const accesorio=9.99;
if (precio<estado_de_cuenta) {
    console.log("También compraré el accesorio");
    precio = precio+accesorio;
}
else {
    console.log("No, gracias");
}

//Loops

for (var i=0; i<=9; i++){
    console.log(i);
}

//Functions

//Calcular Impuesto General a las Ventas (IGV 18%)
//const igv = 1.18;
//function calcularIgv (precio) {
  //  precio = precio*igv;
    //retorna el nuevo valor total
    //return precio;
//}
//var total=99.99;
//total = calcularIgv(total);
//console.log(total.toFixed(2));*/

//Tarea YDKJS
var cuenta = prompt ("¿Cuánto tienes en tu cuenta bancaria");
cuenta =  Number(cuenta);
var mental = 200
var telefono= 99.99
var accesorio= 9.99
var igv= 1.18;

function calcularIGV(total) {
    return total*igv;
}

function formateoTotal(total) {
    return "$" + total.toFixed(2);
}

var minimo= calcularIGV(telefono);


if (minimo<=cuenta) {
    
while (total<=cuenta) {
    total=total+telefono
    if (total<=mental) {
        total = total+accesorio
    }
    calcularIGV(total);       
}

console.log ("Tu compra: "+formateoTotal(total));
}
else {
    console.log ("No tienes plata para hacer esta compra");
}
