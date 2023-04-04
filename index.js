'use strict'

//place in entry point of app because it gives access to process.env for all subsequent modules
//if unsure, can just import again
require('dotenv').config();
const app = require('./src/server.js');
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('App is listening!!');
});