//Función que tome el array de números y que encuentre el segundo menor y el segundo mayor respectivamente.

function ordenArray (array) {
    var datos = array.length;

    function comparar(a, b) {
        return a-b;
    }
    array.sort(comparar);

    return ( "El segundo menor es: " + array[1] + " y el segundo mayor es: " + array[datos - 2])
}

console.log(ordenArray ([52, 36, 68, 25]))

//Función que indica si un string es palindromo o no

function palindromo(h){
    var palabra=h.replace(/ /g,"").toLowerCase()
    var tem=palabra.length-1;
    for (var i=0; i<palabra.length/2; i++){
       if(palabra.charAt(i) != palabra.charAt(tem)){
           return "No es un palindromo"
       }
       tem-- 
    }
    return "Es un palindromo"
}
console.log(palindromo("somos"))