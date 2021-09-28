class Node {
    constructor(data){
        // data: valor que le vamos a pasar cuando instanciemos la interfaz (value)
        this.data = data

        // propiedad que nos indica el enlace al siguiente nodo
        this.next = null
    }
}

class LinkedList {
    constructor () {
        this.head = null // trackea el primer elemento de la lista
        this.tail = null // trackea el último elemento de la lista
        this.length = 0 // necesito conocer cuántos nodos hay
    }

    // verificar si la list está vacía o no
    isEmpty () {
        return this.length === 0
    }
    // agregar elemento
    push (value) {
        const newNode = new Node(value) // Asignando el valor a la interfase Node del DOM (cosa que no funcionó, a mi parecer)

        if(this.isEmpty()) { //Validar si la lista está vacía
            this.head = newNode //asignamos el nuevo nodo al head (primer elemento)
            this.tail = newNode //asignamos el nuevo nodo al tail (último elemento)
        } else {
            this.tail.next = newNode //enlazar tail con el nuevo elemento
            this.tail = newNode //asignar la tail hacia el nuevo valor
        }

        this.length++
    }

    pop() {
        /*
        * Para remover nodos de mi lista:
        * Verificar si la lista está vacía
        * Verificar el elemento next de mi nodo del tail
        * Actualizar el tail a que apunte al current node (Head)
        * Asignar la nueva tail node que apunte a null
        * Decrementar la longitud
        * El método pop debe retornar el nuevo tail
        */

        if (this.isEmpty()) {
            return null
        } else if (this.length === 1) {
            const nodeToRemove = this.head
            this.head = null
            this.tail = null
            this.length--

            return nodeToRemove
        } else {
            /* Cuando hay muchos nodos en la lista
            * asignar a nuestro apuntador a la cabeza
            */
           let currentNode = this.head
           // remover el último elemento de la lista
           const nodeToRemove = this.tail
           // creo variable para guardar lo que será mi nueva tail
           let newTail 

           while (currentNode) { // mientras mi currentNode exista
               if (currentNode.next === nodeToRemove) { //si el next del current es igual al elemento a borrar
                   newTail = currentNode // la nueva cola es el current node
                   break // termina condición
               }

               currentNode = currentNode.next // el currentNode lo asignamos a su next
           }

           newTail.next = null // el next de mi nuevo tail tiene que valer null (por ser el final)
           this.tail = newTail // asignamos la tail al nuevo valor de tail
           this.length-- // decrementamos la longitud
           return nodeToRemove // retornamos valor que borramos 
        }
    }
}

const myList = new LinkedList()

myList.push("Diego")
myList.push("Pedro")
myList.push("Maria")
myList.push("Juan")
myList.pop()
console.log(myList)