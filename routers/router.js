var express = require('express');
var router = express.Router()
var userService = require('./userService')
var productService = require('./productService')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(userService)
router.use(productService)

module.exports = router