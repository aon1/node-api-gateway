var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://localhost:3001'
const api = apiAdapter(BASE_URL)

router.get('/users', (req, res) => {
  api.get('/').then(resp => {
    res.send(resp.data)
  })
})

module.exports = router