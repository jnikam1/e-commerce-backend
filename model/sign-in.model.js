const mongoose = require('mongoose')

const SignIn = mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },

        password: {
            type: String,
            required: true
        },

        
    })


module.exports = mongoose.model('SignIn', SignIn)