// Como con Mongoose se trabaja con promesas, se trabaja con async y await
const asyncHandler = require('express-async-handler');

const Monto = require('../models/numberModel')

const getMontos = asyncHandler (async(req, res) => {

    const montos = await Monto.find({user: req.user.id})

    res.status(200).json(montos)
})

const postMontos = asyncHandler (async(req, res) => {
    if(!req.body.text) {
       res.status(400)
       throw new Error('Por favor, ingresa un texto')
    }

    const monto = await Monto.create({
        text: req.body.text,
        amount: req.body.amount, 
        user: req.user.id
    })

    res.status(200).json(monto)
})

const delMontos = asyncHandler (async(req, res) => {

    const monto = await Monto.findById(req.params.id)

    if(!monto){
        res.status(400)
        throw new Error ('Tarea no encontrada')
    }

    if(monto.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('Acceso no autorizado')
    }

    await monto.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getMontos,
    postMontos,
    delMontos
}