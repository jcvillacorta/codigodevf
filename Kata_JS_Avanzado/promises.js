/**
 * Organizar una fiesta de cumpleaños
 */

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
 