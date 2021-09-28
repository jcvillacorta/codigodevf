class BinarySearchTree {
    constructor (){
        this.root = null
    }
}

insertNumbernode (data, left=null, right=null) {
    // creamos el nodo
    // pasar los datos como un nodo padre individual
let Node = {
    data,
    left,
    right
}

let currentNode

if (!this.root) {
    this.root= Node
} else { //si es una rama a la currentNode 
    currentNode = this.root

    while (currentNode) {
        // si los datos ingresados son menores que los datos existentes se envian a la izquierda
        if (data < currentNode.data) {
            if (!currentNode.left) {
                currentNode.left = Node

            } else {
                currentNode = currentNode.left
            }
        } else if (data > currentNode.data) {
            if (!currentNode.right) {
                currentNode.right = Node
            } else {
                currentNode = currentNode.right
            }
        } else {
            console.log("Ingresa un nuevo valor")
        }
    }
}
}

let BSTest = new BinarySearchTree()

BSTest.insertNumbernode(10)
BSTest.insertNumbernode(33)