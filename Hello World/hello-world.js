/*var entities= [];
var index= 0;
while (index < 5) {
    entities.push(index);
    index ++;
}
console.log(entities);

var serie = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0];
for (let index = 0; index < serie.length; index++) {
    if (serie[index]>3) {
        console.log (serie[index])
    }
}*/
/*function suma (x,y) {
    var total = x + y;
    return "La suma es: "+ total;
}
console.log (suma (3,3));*/

/*function sumatoria(a) {
    var suma=0;
    for (let i = 0; i < a.length; i++) {
        suma+=a[i]
        }
        return "La suma total es: " + suma
    }
var arr=[1,2,3,4,5,6]
console.log (sumatoria (arr))*/

//prompt:("Por favor, escribe tu nombre");
//var username: (prompt);
//console.log (username);

/*var n = 0
while (n >= -50) {
    console.log(n)
    n--
}*/

/*var arr = [1,2,3,4]
var arr2=[]
var tem=0
for (var i=arr.length-1;i>=0;i--){
    arr2[tem]=arr[i]
    tem++
}
console.log(arr2)

function reverse (array) {
    var reversed = []
    for (var i = array.length - 1; i >= 0; i -= 1){
        reversed.push(array[i])
    }
    return reversed
}
console.log(reverse([1,2,3,4]))

function numeroMayor(numArray) {
    return Math.max.apply(null, numArray);
  }
  function numeroMenor(numArray) {
    return Math.min.apply(null, numArray);
  }
console.log (numeroMayor ([2,4,6,10,20]))
console.log (numeroMenor ([2,4,6,10,20]))*/

//Funcion que tome el array de números y que encuentre el segundo menor y el segundo mayor respectivamente.
/*
function ordenArray (array) {
    var datos = array.length;

    function comparar(a, b) {
        return a-b;
    }
    array.sort(comparar);

    return ( "El segundo menor es: " + array[1] + " y el segundo mayor es: " + array[datos - 2])
}

console.log(ordenArray ([52, 36, 68, 25]))

var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());
​
var test = obj.prop.getFullname;

console.log(test())

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

var estudiante = {
    nombre: "Jhonny Mnemonic",
    sclass: "XIX",
    rollno: 12,
}

console.log(estudiante.rollno);
delete estudiante.rollno;
console.log(estudiante.rollno);

//
var a=1;
console.log (`El resultado es de ${a}`)*/

var car = {
    wheels: 4,
    company: "honda",
    name: "civic",
    year: 2016
}

if (wheels=4) { 
    console.log(true)
    
}
else
console.log(false)
