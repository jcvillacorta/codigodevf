const ModelGroceries = require('../models/Groceries');

const createGrocery = (req, res) => {
    ModelGroceries.create(req.body)
        .then((row)=>{
            res.status(201).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const createCustomer = (req, res) => {
    ModelGroceries.createCustomer(req.body)
        .then((row)=>{
            res.status(201).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const createSales = (req, res) => {
    ModelGroceries.createSales(req.body)
        .then((row)=>{
            res.status(201).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const findAllGroceries = (req, res) => {
    ModelGroceries.findAllGroceries()
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const findAllCustomers = (req, res) => {
    ModelGroceries.findAllCustomers()
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const findAllSales = (req, res) => {
    ModelGroceries.findAllSales()
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const findOneGrocery = (req, res) => {
    ModelGroceries.findOneGrocery(req.params.sku_id)
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const findOneCustomer = (req, res) => {
    ModelGroceries.findOneCustomer(req.params.customerId)
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const updateOneGrocery = (req, res) => {
    ModelGroceries.update(req.params.sku_id, req.body)
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const updateOneCustomer = (req, res) => {
    ModelGroceries.updateCustomer(req.params.customerId, req.body)
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const destroyOneGrocery = (req, res) => {
    ModelGroceries.destroy(req.params.sku_id)
        .then(()=>{
            res.status(204).send();
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const destroyOneCustomer = (req, res) => {
    ModelGroceries.destroyCustomer(req.params.customerId)
        .then(()=>{
            res.status(204).send();
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

module.exports = {
    createGrocery,
    createCustomer,
    createSales,
    findAllGroceries,
    findAllCustomers,
    findAllSales,
    findOneGrocery,
    findOneCustomer,
    updateOneGrocery,
    updateOneCustomer,
    destroyOneGrocery,
    destroyOneCustomer
}