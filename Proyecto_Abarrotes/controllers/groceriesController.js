const ModelGroceries = require('../models/Groceries');

const createGrocery = (req, res) => {
    // Aquí yo debería crear mi Home
    //res.send({ message: 'Home Creado (Fake)'})

    // Validar que todo esté bien y ejecutar el create de mi Modelo
    ModelGroceries.create(req.body)
        .then((row)=>{
            res.status(201).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

module.exports = {
    createGrocery,
}