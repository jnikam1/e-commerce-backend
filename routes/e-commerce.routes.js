const express = require('express')

const controller = require('../controller/e-commerce.controller')

const router = express.Router()


// Create
router.post('/create', controller.create)

// Read

router.get('/read', controller.read)

module.exports = router