/**
 * Conceptos básicos de JS
 * 
 * Pondré aquí todos los conceptos en código a nivel básico para ir almacenando
 * cómo se escribe el código de cada uno de ellos
 */

/**
 * Objetos
 */

class animal {
    constructor(especie, edad, color){ //constructor
        this.especie = especie
        this.edad = edad
        this.color = color
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
    }
    verInfo(){ // método con function, las funciones flecha no sirven para crear métodos en la clase 
        document.write(this.info + "<br>")
    }
}

// Herencia hacer una clase nueva pero que herede las características de la clase anterior

class doggie extends animal {   //hereda la clase animal
    constructor(especie, edad, color, raza){ //se añade raza
        super(especie,edad,color)   //con esto hereda lo del constructor anterior y ya no hace falta escribirlo de nuevo
        this.raza = raza //añade el nuevo elemento
    }
    static ladrar (){ //static es un método que puede funcionar aunque la clase no se haya instanciado
        alert("Guau!")
    }
}

doggie.ladrar() // aquí me saldría la alerta guau sin haber creado todavía la variable perro porque uso static

const perro = new doggie(" perro", 5, "marrón", "doberman") //si queremos añadir la raza añadimos la clase heredada
const gato = new animal("gato", 2, "negro")
const pajaro = new animal("pajaro", 1, "verde")

perro.verInfo()
gato.verInfo()
pajaro.verInfo()



/**
 * Promesas - Promises
 */

var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('hello world 1');
    }, 1000);
});

promise.then(function success(data) {
    console.log(data);
});

//Promesa para organizar una fiesta de cumpleaños

const promesa = new Promise((resolve, reject)=> {
    const dinero = Math.floor(Math.random() * 1000)
    console.log(dinero)
    setTimeout (() => {
        dinero >= 500
        ? resolve ("Sí se hace la fiesta") //esto es como if
        : reject ("No hay fiesta salame") // esto es como else
    }, 2000)
})

promesa 
 .then(result => console.log(result))
 .catch(error => console.log(error))

 //Meter la promesa anterior en una función y poner una cantidad

 const fiesta = (dinero) =>{
 return new Promise((resolve, reject)=> {
    setTimeout (() => {
        dinero >= 500
        ? resolve ("Sí se hace la fiesta") //esto es como if
        : reject ("No hay fiesta salame") // esto es como else
    }, 2000)
})
}
fiesta(75)
