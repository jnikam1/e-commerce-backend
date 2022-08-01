const express = require('express')

const controller = require('../controller/sign-in.controller')

const router = express.Router()


// Create
router.post('/signin', controller.signInCreate)

module.exports = router