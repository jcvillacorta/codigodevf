const express = require('express')
const router = express.Router();
const groceriesController = require('../controllers/groceriesController')

router.get('/groceries', (groceriesController.createGrocery));
module.exports = router;