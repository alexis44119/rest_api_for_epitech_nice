'use strict';
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

describe('Test pour la création d\'un user', async()=> {
    var host = "http://localhost:8080";
    var path = "/register";

    it("should create a user", async ()=> {
        const result = await chai
            .request(host)
            .post(path)
            .set('content-type', 'application/json')
            .send({username: 'test',password:"test"});

        expect(result.statusCode).to.equal(200);
    });
});