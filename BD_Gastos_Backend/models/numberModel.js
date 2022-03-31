const mongoose = require('mongoose');

const numberSchema = mongoose.Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'Por favor, escribe un texto']
    },
    amount: {
        type: Number,
        required: [true, 'Por favor, ingresa una cantidad']
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Monto', numberSchema)