// Stack - Pilas

class Stack {
    constructor () {
        this.count = 0
        this.storage = {}
    }

push (item) {
    this.count++
    this.storage[this.count] = item

    return this.count
}

pop (){
    const deletedItem = this.storage[this.count]
    delete this.storage[this.count]
    this.count--
    return deletedItem
}

size (){
    return this.count
}

peek (){
    return this.storage[this.count]
}

}

const pila = new Stack()
console.log(pila.push("Rocio"))
console.log(pila.push ("Pedro"))
console.log(pila.push ("Juan"))

console.log(pila.storage)

console.log(pila.pop())

console.log("Peek " + pila.peek())
console.log("Size " + pila.size())

