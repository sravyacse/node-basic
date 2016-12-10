
var chai = require("chai"),
expect = chai.expect,
should = chai.should();

describe.skip("Language Chains Test Suite",function(){
it("not assertions",function(){
	var foo = "buck";
expect(foo).to.not.equal('bar');
foo.should.not.equal('bar');

 })
})
describe.skip("My first Program" , function(){
	it("Not Assertions",function(){
		var strip = "java";
		//expect(strip).to.be.equal('java');
		function sample(){
			//throw new Error("Failed");
			return "Hello";
		}
		//expect(strip).to.not.throw('java');
		expect(sample).to.not.throw(Error);
		sample.should.not.throw(Error);

		var obj = {foo :'bazz'};
		expect(obj).to.have.property('foo').and.not.equal('baz');
		obj.should.have.property('foo').and.not.equal('baz');
	})

	it("deep assertion",function(){
		var obj = {city : 'Hyd'}
		expect(obj).to.be.deep.equal({city : 'Hyd'});
		obj.should.have.deep.equal({city : 'Hyd'});
		//expect(obj).to.be.equal({city : 'Hyd'}); if won't mention deep throws error even values are same
		var objOne = {
			foo :{
				bar :{
					name:'Moksha'

				}
			}
		}
		expect(objOne).to.have.deep.property('foo.bar.name','Moksha');
		expect(objOne).to.have.deep.property('foo.bar.name').to.be.equal('Moksha');
		var deepCss = { '.link': { '[target]': 42 }};
		expect(deepCss).to.have.deep.property('\\.link.\\[target\\]', 42);//if want to ignore special charcters while comparing give "\\" before

	})
	it("any assertion",function(){
		var sample={
			name : "uma",
			city:"hyd",
		}
		sample.should.have.any.keys("name","city","key1","key2");
		sample.should.have.all.keys("name","city");
		expect(sample).to.have.all.keys("name");
	})

	it("a and an assertioms", function(){

//var prop = 'null';
		expect('boston').to.be.a('String');
		('boston').should.be.a('String');
		expect({ foo: 'bar' }).to.be.an('object');
		expect(null).to.be.a('null');
		//prop.should.ba.a("null");
	})
	it("include assertion",function(){
		expect([1,2,3]).to.include(2);


	})
	it("Property assertion",function(){
		var obj ={foo:'beer',
					city:'hyd'
				};
		expect(obj).to.have.property('foo').to.be.equal('beer').with.length(4);
		expect(obj).to.have.property('foo','beer');
	})

	it("match assertion",function(){
		//expect('hyderabad').to.match(/^der/);
		expect('hyderabad').to.match(/^hyd/);
		expect('99BChyderabad').to.match(/^[0-9,a-z,A-Z]/);
	})
})