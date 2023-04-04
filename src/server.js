'use strict';

const express = require('express');
const cors = require('cors');
const capitalize = require('./capitalize/capitalize');

//singleton. it gives you something that you should only have to invoke once.
const app = express(); 
app.use(cors());

function logger(request, response, next) {
    console.log('Express app hit!');
    next();
}

//if app uses it, it becomes an application-level middleware. Runs no matter what route is being used.
//app middleware runs before it hits the routes
app.use(logger)

//anonymous middleware function
//order of middleware matters
app.get('/message', (request, response, next) => {
    response.send('You hit the message route!');
});


/*app.get('/capitalize-me', (req, res, next) => {
    if (req.query.message) {
        let mssg = capitalize(req.query.message);
        res.send(mssg);
    } else {
        res.send('Need input');
    }
});*/

module.exports = app;