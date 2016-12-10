
var chai = require("chai"),
expect = chai.expect,
should = chai.should(),
supertest = require("supertest");
var server = supertest.agent("http://api.openweathermap.org");
describe("Weather API Test suit",function(){
	it("should get weather",function(done){
		server.get("/data/2.5/weather?q=London,uk&appid=ae5a3436399a726ee45827da4f001eb9")
		.expect(200)
		.expect("content-type",/json/)
		.end(function(err,res){
			console.log(res.body)
			done()
		})

	})
})