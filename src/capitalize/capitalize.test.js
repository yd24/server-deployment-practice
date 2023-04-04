'use strict';

//Dependency Injection
//We add the local path since this is not an installed node module.
const capitalize = require('./capitalize.js');

describe('As a User, I want a way to capitalize my strings.', () => {
    test('Should capitalize a string', () => {
        let output = capitalize('test');
        expect(output).toEqual('TEST');
    });
});
