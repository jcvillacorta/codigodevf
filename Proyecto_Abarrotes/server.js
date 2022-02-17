const express = require('express') // traemos el módulo y lo guardamos en la const express
// Importar las rutas de mi vista de Home
const homeRoutes =  require('./routes/homeRoutes');
const app = express() // ejecutar express y se guarda en app

// Middlewares para trabajar con JSON
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Rutas
app.use('/api/v1', homeRoutes);

// Poner el servidor a escuchar
app.listen(3000, function () {
    console.log('escuchando en https://localhost:3000')
})