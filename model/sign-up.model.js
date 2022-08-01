const mongoose = require('mongoose')

const SignUp = mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },

        password: {
            type: String,
            required: true
        },
        confirmPassword:{
            type: String,
            required: true
        },


        
    })


module.exports = mongoose.model('SignUp', SignUp)