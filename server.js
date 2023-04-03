'use-strict';

const express = require('express');
const cors = require('cors');
const capitalize = require('./capitalize/capitalize');

const app = express(); //singleton. it gives you something that you should only have to invoke once.
app.use(cors());

app.get('/capitalize-me', (req, res, next) => {
    if (req.query.message) {
        let mssg = capitalize(req.query.message);
        res.send(mssg);
    } else {
        res.send('Need input');
    }
});

module.exports = app;