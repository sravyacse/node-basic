var chai = require("chai"),
expect = chai.expect,
should = chai.should();

function isEven(value){
return value %2 === 0;
	}

describe.skip("try these" ,function(){


	it("Should retun true if the no is even", function(){
		expect(isEven(4)).to.be.true;
		isEven(4).should.be.true;
	})
	it("Should retun false if the no is not even" , function(){
		expect(isEven(3)).to.be.false;
	})

})