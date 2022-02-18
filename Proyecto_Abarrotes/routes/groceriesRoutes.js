const express = require('express')
const router = express.Router();
const groceriesController = require('../controllers/groceriesController')

router.post('/groceries', (groceriesController.createGrocery));
router.post('/customers', (groceriesController.createCustomer));
router.post('/sales', (groceriesController.createSales));
router.get('/groceries', (groceriesController.findAllGroceries));
router.get('/customers', (groceriesController.findAllCustomers));
router.get('/sales', (groceriesController.findAllSales));
router.get('/groceries/:sku_id', (groceriesController.findOneGrocery));
router.get('/customers/:customerId', (groceriesController.findOneCustomer));
router.patch('/groceries/:sku_id', (groceriesController.updateOneGrocery));
router.patch('/customers/:customerId', (groceriesController.updateOneCustomer));
router.delete('/groceries/destroy/:sku_id', (groceriesController.destroyOneGrocery));
router.delete('/customers/destroy/:customerId', (groceriesController.destroyOneCustomer));
module.exports = router;