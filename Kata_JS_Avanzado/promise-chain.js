/**
 * Fetch API: mecanismo basado en promesas, cuando se llama
 * al método fetch() es como si se definiera una promesa usando new Promise()
 */

const validateStatus = (response) => {
    if (response.status >= 200) { //status 200: todo ok
        return Promise.resolve
    } 

    return Promise.reject(new Error("Hubo un error"))
}

const jsonFile = response = response.json()

fetch("/url.com/test")
    .then(validateStatus) //llama a la función validateStatus: y debe devolver una promise
    .then(jsonFile)
    .then(data => {
        console.log("Ya obtuve la información", data)
    })
    .catch(error =>{
        console.log("Falló algo en el request, cuec", error)
    })

    /**
     * El fetch retorna una respuesta que contiene muchas propiedades:
     * status: HTTP value -> http status code
     */