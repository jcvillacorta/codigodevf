/**
 * Algoritmo de búsqueda binaria
 * Requisitos:
 * 1. Debemos mandar un arreglo ordenado
 * Pasos:
 * 1. Conocer la longitud
 * 2. Necesitamos un inicio (principio 0)
 * 3. Longitud
 * 4. Partir la lista -> comparación
 */

const myArray = [4, 7, 10, 11, 55, 71, 89, 100, 2000]

// Creamos una función que recibiría los parámetros de arreglo y elemento a buscar
const binarySearch = (arr, elementToFind) => {
    let min = 0, max = arr.length, mid = null, current = null

    while (min <= max) {
        mid = Math.floor((min + max) / 2)
        current = arr[mid]

        if (elementToFind === current) {
            return current
        }

        if (elementToFind > current) {
            min = mid + 1
        }

        if (elementToFind < current) {
            max =  mid - 1
        }
    }

    return -1 //si no existe el elemento debería botar -1
}

// me sale en la consola al hacer la búsqueda binaria si existe el elemento o no existe
const search = binarySearch(myArray, 100)
if (search >=0) {
    console.log(`Sí existe ${search}`)
} 

if (search === -1) {
    console.log("No existe")
}