

//Require the dev-dependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);
//Our parent block

/*
  * Test the /GET route
  */
describe('/GET items', () => {
  it('it should GET all the items', (done) => {
	chai.request(server)
		.get('/api/items')
		.end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('array');
			res.body.length.should.be.eql(3);
		  done();
		});
  });
});

