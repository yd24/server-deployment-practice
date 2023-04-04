'use strict'

function capitalize(value) {
    return value.toUpperCase();
}

//export an object to be accessible by other files.
//here, we send the function as an object.
module.exports = capitalize;