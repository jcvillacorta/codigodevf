// Funcion Cosntructora

/*const createAnimal = function (name) {
    this.name = name
}

const jirafa = new createAnimal ("Jirafa")

console.log(jirafa)*/

// Class notation

class createAnimal {
    constructor (name, age, color){
        this.name = name
        this.age = age
        this.color = color
    }
    eat (food){
        this.food= food
    }
    sleep (hrs) {
        this.hrs= hrs
    }
}

const iguana = new createAnimal ("Iguana", 12)
console.log(iguana)
iguana.sleep(8)