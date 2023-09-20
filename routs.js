const express = require('express')
const user = express.Router()
const users =  require('./controler/user')

user
.get('/',users.getuser)
.post('/',users.createuser)

module.exports = user