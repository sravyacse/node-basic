
var chai = require("chai"),
expect = chai.expect,
should = chai.should(),
supertest = require("supertest");

var server = supertest.agent("http://localhost:4000");

describe("Contact API test Suite",function(){
// it("should return home page withsome json",function(done){
// 	server.get("/")
// 	.expect(200)
// 	.expect("content-type", /json/)
// 	.end(function(err,res){
// 		console.log(res);
// 		//console.log(res.text);
// 		//res.status.should.be.equal(200);
// 		//res.charset.should.be.equal("utf-8");
// 		//res.info.should.be.false;
// 		//console.log(res.text);
// 		//var obj = res.text;
// 		//obj.should.have.property("message","Hello Hyderabad !!");
//json.parse
// 		done();
// 	});
// })
it("should get Contact list",function(done){
	server.get("/contact")
	.expect(200)
	.expect("content-type",/json/)
	.end(function(err,res){
console.log(res.body);
Array.isArray(res.body).should.be.true;
console.log(res.body.length);
//res.body.length.should.be.equal(2);
res.body.length.should.be.a("number");
res.body.forEach(function(item){
	item.should.have.property("_id");
	item.should.have.property("name");
	item.should.have.property("contact");
	//item.should.have.property("phno");
	//item.should.have.property("name").with.length(7);
	item.should.have.property("contact").to.contain("@");
	item.should.have.property("contact").to.contain(".com");

})

done()
	})
})

it.skip("should add contact to the database",function(done){
	var obj = {
		name: "siri2",
		contact:"siri2@gmail.com",
	}
	server.post("/contact")
	.send(obj)
	.expect(200)
	.expect("content-type",/json/)
	.end(function(err,res){
		//res.status.should.be.equal(200);
		console.log(err);
		//console.log(res.body);
		done();
	});

})
it("should edit the contact",function(done){
	var obj ={
		_id :"584bdc439ca63f2288c77e18",
		name:"siri1",
		contact:"siri1@gmail.com"
	}
	server.put("/contact/" +obj._id)
	.send(obj)
	.expect(200)
	.expect("content-type",/json/)
	.end(function(err,res){
		console.log(res.body)
		done()
	})
})
it("should delete contact",function(done){
		var contactId = "584bdc439ca63f2288c77e18";
		
	server.delete("/contact/" +contactId)
	.send(contactId)
	.expect(200)
	.expect("content-type",/json/)
	.end(function(err,res){
		console.log(res)
		done()
	})

})
})

