const express = require('express') // traemos el módulo y lo guardamos en la const express
const app = express() // ejecutar express y se guarda en app

// Middlewares para trabajar con JSON
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.get('/', function (req, res) { // si alguien hace una petición al home (/), me devuelve Hola Mundo
  res.send('Hola Mundo') // no utilizamos el req, solo el response(res) que envía el texto
})

app.get('/api/v1', (req, res) =>{ //aquí uso función flecha
    res.send(`<h1>Hola</h1>
    <h3>Aquí estará mi API pronto</h3>`)
})

app.get('/api/v1/saludo', (req, res) =>{ 
    const miSaludo = {
        id: 1,
        name: 'Juan Carlos',
        message: 'Hola, soy JC, alumno de DevF'
    }

    res.send(miSaludo)
})

// Nueva Ruta con Params

app.get('/api/v1/pokemons/:id', (req, res) =>{ //: para leer parámetros
    console.log(req.params)
    // api/v1/temporadas/2/pokemons/5 
    //{numero: 2, id: 5}
    res.send(`<h3>Pediste el pokemon: ${req.params.id}</h3>`)
})

//Nueva ruta con Query Parameters

app.get('/api/v1/pokemons', (req, res) =>{ //: para leer parámetros
    console.log(req.query)
    // supongamos que aquí buscamos al pokemon
    res.send(`<h3>El pokemon que estás buscando es ${req.query.search} de la fecha ${req.query.date}</h3>`)
})

// Nuestra primer ruta con método POST

app.post('/api/v1/students', (req, res)=> {
    // Los middlewares (Línea 5) sirven para recibir el objeto JSON en req.body
    console.log('BODY:', req.body)
    const newStudent = req.body
     //... Aquí se haría el registro en la DB
    res.status(201).send(`El estudiante ${newStudent.name} ha sido creado`)
})

app.listen(3000, function () {
    console.log('escuchando en https://localhost:3000')
}) //con listen ejecutamos el servidor con el que pasamos el puerto, en este caso, 3000