const express = require('express')
const router = express.Router();
const groceriesController = require('../controllers/groceriesController')

// Si la ruta es homes ejecute homeController y la función createHome
router.get('/groceries', (groceriesController.createGrocery));
module.exports = router;