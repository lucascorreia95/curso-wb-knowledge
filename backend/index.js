const express = require('express')
const app = express()
const consign = require('consign')
const mongoose = require('mongoose')
const db = require('./configs/db')

require('./configs/mongodb')

app.db = db
app.mongoose = mongoose

consign()
    .include('./configs/passport.js')
    .then('./configs/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./schedule')
    .then('./configs/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('Backend escutando a porta 3000')
})
