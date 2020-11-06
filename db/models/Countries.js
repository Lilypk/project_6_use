const mongoose = require('../db/connection')

let Countries = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    capital: {
        type: String,
        trim: true
    },
    region: {
        type: String,
        trim: true
    },
    languages: {
        type: [{
            name: String,
            nativeName: String
        }],
        trim: true
    }
})

module.exports = mongoose.model('Countries', Countries)
