var chai = require("chai"),
expect = chai.expect,
should = chai.should();

var isEven = require("./isEven");
describe.skip("Top one",function(){


describe("Sample test cases" ,function(){


	it("Should retun true if the no is even", function(){
		expect(isEven(4)).to.be.true;
		isEven(4).should.be.true;
	})
	it("Should retun false if the no is not even" , function(){
		expect(isEven(3)).to.be.false;
	})

})
function add(num1, num2){
	return num1+num2 ;
}
describe("check the functionality of beforeach",function(){
 var num ;
 beforeEach(function(){
 	num= 5;
 })
 it("Should return 10 if add 5+5",function(){
num = add(num,5);
num.should.be.equal(10);
//num.should.be.equal(11);
 })
 it("Should should take 5+7",function(){
 	num = add(num,7);
 	num.should.be.equal(12);
 })
})
})