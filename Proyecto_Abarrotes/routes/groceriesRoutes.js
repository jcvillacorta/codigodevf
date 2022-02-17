const express = require('express')
const router = express.Router();
const groceriesController = require('../controllers/groceriesController')

router.post('/groceries', (groceriesController.createGrocery));
router.get('/groceries', (groceriesController.findAllGroceries));
router.get('/groceries/:sku_id', (groceriesController.findOneGrocery));
router.patch('/groceries/:sku_id', (groceriesController.updateOneGrocery));
router.delete('/groceries/destroy/:sku_id', (groceriesController.destroyOneGrocery));
module.exports = router;