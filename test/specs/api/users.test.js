const superTest = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const { faker } = require('@faker-js/faker');

const randomName = faker.person.fullName();
const randomJob = faker.person.jobTitle();

const envConfig = require('../../../config/env');
const reqres = superTest(envConfig.apiBaseUrl);

describe('Users API Tests', () => {

    it('GET - List User Response', async () => {
        const response = await reqres.get('/users');
        console.log('Status Code is: ' + response.status);
        expect(response.status, 'Status Successful').to.equal(200);
        console.log('Total users: ' + response.body.length);
        expect(response.body.length, 'User list should not be empty').to.be.greaterThan(0);
    });

    it('GET - Single User Response', async () => {
        const response = await reqres.get('/users/1');
        console.log('Status Code is: ' + response.status);
        expect(response.status, 'Status Successful').to.equal(200);
        console.log('User id is: ' + response.body.id);
        expect(response.body.id, 'Id Equals').to.equal(1);
    });

    it('GET - Invalid Endpoint Not Found Response', async () => {
        const response = await reqres.get('/users/invalid-endpoint');
        console.log('Status Code is: ' + response.status);
        expect(response.status, 'Status Successful').to.equal(404);
    });

    it('GET - List of Posts Response', async () => {
        const response = await reqres.get('/posts');

        console.log('Status Code is: ' + response.status);
        expect(response.status, 'Status Successful').to.equal(200);

        console.log('No. of posts: ' + response.body.length);
        expect(response.body.length, 'Posts list should not be empty').to.be.greaterThan(0);

        console.log('First post id is: ' + response.body[0].id);
        expect(response.body[0].id, 'First post id').to.equal(1);
    });

    it('POST - Create User Response', async () => {
        const response = await reqres
            .post('/users')
            .send({
                name: randomName,
                job: randomJob
            });
        console.log('Status Code is: ' + response.status);
        expect(response.status, 'Status Successful').to.equal(201);
        console.log('Name is: ' + response.body.name);
        expect(response.body.name, 'Name Contains').to.contains(randomName);
        console.log('Job is: ' + response.body.job);
        expect(response.body.job, 'Job Contains').to.contains(randomJob);
        expect(response.body.id, 'Generated id').to.exist;
    });
});
