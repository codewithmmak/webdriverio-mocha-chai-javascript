const superTest = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const { faker } = require('@faker-js/faker');

const randomName = faker.name.findName();
const randomJob = faker.name.jobTitle();

const reqresUrl = 'https://reqres.in';
const reqres = superTest(reqresUrl);

describe('Users API Tests', () => {

    it('GET - List User Response', async () => {
        const response = await reqres
            .get(`/api/users?page=2`)
            .then(response => {
                return response;
            });
        console.log('Status Code is: ' + response.status);
        expect(response.status, 'Status Successful').to.equal(200);
        console.log('URL is: ' + response.body.total_pages);
        expect(response.body.total_pages, 'Total Pages').to.equal(2);
    });

    it('GET - Single User Response', async () => {
        const response = await reqres
            .get(`/api/users/2`)
            .then(response => {
                return response;
            });
        console.log('Status Code is: ' + response.status);
        expect(response.status, 'Status Successful').to.equal(200);
        console.log('URL is: ' + response.body.data.id);
        expect(response.body.data.id, 'Id Equals').to.equal(2);
    });

    it('GET - Single User Not Found Response', async () => {
        const response = await reqres
            .get(`/api/users/23`)
            .then(response => {
                return response;
            });
        console.log('Status Code is: ' + response.status);
        expect(response.status, 'Status Successful').to.equal(404);
    });

    it('GET - List of User Response', async () => {
        const response = await reqres
            .get(`/api/unknown`)
            .then(response => {
                return response;
            });

        console.log('Status Code is: ' + response.status);
        expect(response.status, 'Status Successful').to.equal(200);

        console.log('No. of pages: ' + response.body.page);
        expect(response.body.page, 'Pages Equals').to.equal(1);

        console.log('Per Page: ' + response.body.per_page);
        expect(response.body.per_page, 'Per Page Equals').to.equal(6);

        console.log('Total is: ' + response.body.total);
        expect(response.body.total, 'Total Equals').to.equal(12);

        console.log('Id is: ' + response.body.data[0].name);
        expect(response.body.data[0].name, 'Name Contains').to.contains("cerulean");
    });

    it('POST - Create User Response', async () => {
        const response = await reqres
            .post(`/api/users`)
            .send({
                "name": randomName,
                "job": randomJob
            })
            .then(response => {
                return response;
            });
        console.log('Status Code is: ' + response.status);
        expect(response.status, 'Status Successful').to.equal(201);
        console.log('Name is: ' + response.body.name);
        expect(response.body.name, 'Name Contains').to.contains(randomName);
        console.log('Job is: ' + response.body.job);
        expect(response.body.job, 'Job Contains').to.contains(randomJob);
    });
});