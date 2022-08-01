const express = require('express')

const controller = require('../controller/contact.controller')

const router = express.Router()


// Create
router.post('/contact', controller.ContactCreate)

module.exports = router