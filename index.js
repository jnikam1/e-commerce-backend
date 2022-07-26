const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const router = require('./routes/e-commerce.routes')

const app = express()

app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send("Welcome to E-commerce App")
})

app.use('/e-commerce', router)

const PORT = 6000
app.listen(PORT, () => {
    console.log("Listening on 6000")

})

const MONGOURI = "mongodb+srv://jnikam1:1234@cluster0.8uptl.mongodb.net/products?retryWrites=true&w=majority"
mongoose.connect(MONGOURI)
    .then(() => {
        console.log("Connected to database")
    })
    .catch((error) => {
        console.log("Error connecting to database")
    })
