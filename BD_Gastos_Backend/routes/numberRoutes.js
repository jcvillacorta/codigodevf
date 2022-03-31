const express = require('express');
const router = express.Router();
const {getMontos, postMontos, delMontos} = require('../controllers/numberControllers')
const {protect} = require ('../middleware/authMiddleware')

router.route('/').get(protect, getMontos).post(protect, postMontos)
router.route('/:id').delete(protect, delMontos)

module.exports = router