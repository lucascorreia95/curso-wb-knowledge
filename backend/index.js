const express = require('express');
const app = express();
const consign = require('consign');
const db = require('./configs/db');

app.db = db;

consign()
    .then('./configs/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./configs/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('Backend escutando a porta 3000');
});
