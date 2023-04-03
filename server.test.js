'use-strict';

const supertest = require('supertest');

//we need our Express singleton
const app = require('./server.js');
const request = supertest(app);

describe('As a user, I want to send a request and get a capitalized version.', () => {
    test('Should return TEST when sending a GET request to /capitalize-me', async () => {
        let response = await request.get('/capitalize-me?message=test');
        expect(response.text).toEqual('TEST');
    });
});