const express = require('express')

const controller = require('../controller/sign-up.controller')

const router = express.Router()


// Create
router.post('/signup', controller.signUpCreate)

module.exports = router