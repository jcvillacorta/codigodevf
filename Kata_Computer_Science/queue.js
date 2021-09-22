class Queue {
    constructor () {
        this.queue = []
    }

    get size () {
        return this.length
    }

    enqueue (item) {
        this.queue.push(item)
    }

    dequeue () {
        return this.queue.shift()
    }

    peek () {
        return this.queue[0]
    }
// último elemento
    back () {
        const lastItem = this.queue[this.queue.length - 1]
        return lastItem
    }
// retorna la queue
    print () {
        return this.queue
    }
// valida si está vacío o no
    isEmpty () {
        return this.queue.length === 0
    }

}

const queue = new Queue()
console.log(queue.enqueue("Rocio"))
console.log(queue.enqueue ("Pedro"))
console.log(queue.enqueue ("Juan"))

console.log(queue.print())

console.log(queue.dequeue())

console.log("Peek " + queue.peek())
console.log("Back " + queue.back())

console.log(queue.isEmpty())