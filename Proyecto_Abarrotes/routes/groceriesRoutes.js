const express = require('express')
const router = express.Router();
const groceriesController = require('../controllers/groceriesController')

router.post('/groceries', (groceriesController.createGrocery));
module.exports = router;