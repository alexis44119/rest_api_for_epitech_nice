'use strict';
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

describe('Test pour la gestion des notes', async()=> {
    const host = "http://localhost:8080";
    const path = "/notes";

    it("should create a note", async ()=> {
        const result = await chai
            .request(host)
            .post(path)
            .set('content-type', 'application/json')
            .send({title: 'test',content:"test"});

        expect(result.statusCode).to.equal(200);
    });

    it("should throw a content missing", async ()=> {
        const result = await chai
            .request(host)
            .post(path)
            .set('content-type', 'application/json')
            .send({title: 'test'});

        expect(result.statusCode).to.equal(400);
    });

    it("should throw a content missing", async ()=> {
        const result = await chai
            .request(host)
            .get("/notes");

        expect(result.statusCode).to.equal(200);
    });

});