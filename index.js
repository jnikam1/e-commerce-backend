const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

const cors = require('cors')
var corsOptions = {origin:"http://localhost:3000"}

const ecommerceRouter = require('./routes/e-commerce.routes')
const signInRouter = require('./routes/sign-in.routes')
const signUpRouter = require('./routes/sign-up.routes')
const contactRouter = require('./routes/contact.routes')

const app = express()

app.use(cors(corsOptions))

app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send("Welcome to E-commerce App")
})

app.use('/e-commerce', ecommerceRouter)

app.use('/auth',signInRouter)

app.use('/auth',signUpRouter)
app.use('/contact',contactRouter)

// const PORT = 6000
app.listen(process.env.PORT, () => {
    console.log("Listening on 8080")

})

// const MONGOURI = "mongodb+srv://jnikam1:1234@cluster0.8uptl.mongodb.net/products?retryWrites=true&w=majority"

mongoose.connect(process.env.MONGOURI)
    .then(() => {
        console.log("Connected to database")
    })
    .catch((error) => {
        console.log("Error connecting to database")
    })
