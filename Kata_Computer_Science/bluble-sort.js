/**
 * Bubble sort con for anidado, no tan óptimo a nivel performance
 */

/* function bubbleSort (arr) {
    for(let i=0; i < arr.length; i++ ) {
        // j < (longitud - i)
        for (let j=0; j < arr.length - i -1; j++){
            // comparar las posiciones
            if (arr[j] > arr[j + 1]){
                // intercambia los valores
                // guardar en una variable un valor temporal para proceder a comparar
                var temp = arr[j]
                // reemplazar mi valor actual con el adyacente
                arr[j] = arr[j+1]
                // reemplazo el número al valor que guardé en temporal
                arr[j+1] = temp
            }
        }
    }
    return arr
}

const listaDeNumeros = [6,2,44,56,9,1,17,23,43,89,67,3,99]

console.log(bubbleSort(listaDeNumeros))
 */
/**
 * Bubble sort con Do While
 */

function bubbleSort(arr) {
    let swapped = false
    do {
        swapped =  false
        arr.forEach((item, index) => {
            if (item > arr[index +1 ]){
                let temp =  item
                arr[index] = arr[index + 1]
                arr[index + 1] = temp
                swapped = true
            }
        })
    } while (swapped)

    return arr
}

const listaDeNumeros = [6,2,44,56,9,1,17,23,43,89,67,3,99]
const sorted = bubbleSort(listaDeNumeros)
console.log(sorted)