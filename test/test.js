var expect = require('chai').expect;
var assert = require('chai').assert;
var should = require('chai').should(); //should is a function call unlike expect and assert
var foo = 'bar';
var beverages = {tea:['chai', 'matcha', 'oolong']};
var answer = 43;

/*assert.typeOf(foo, 'string'); // without optional message
assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
assert.equal(foo, 'bar', 'foo equal `bar`');
assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.length(3);
expect(beverages).to.have.property('tea').with.length(3); 


expect(answer).to.equal(43);
expect(answer, 'topic[answer]').to.equal(43); 

foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.length(3);
beverages.should.have.property('tea').with.length(3);*/

chai.config.includeStack = true; //turn on stack trace
chai.config.showDiff = false;	//false to turn off reporter diff display
chai.config.truncateThreshold = 0; //disable truncating


describe('A basic test', function(){
	it('should pass when everything is okay1', function (){
		//expect(true).to.be.true;
		//assert.typeOf(foo, 'string'); // without optional message
		//expect(answer).to.equal(43);
		foo.should.be.a('string');
	});

	it('should pass when everything is okay2', function (){
		//assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
		//expect(answer, 'topic[answer]').to.equal(43);
		foo.should.equal('bar');
	});

	it('should pass when everything is okay1', function (){
		//expect(true).to.be.true;
		//assert.typeOf(foo, 'string'); // without optional message
		//expect(answer).to.equal(43);
		foo.should.have.length(3);
	});

	it('should pass when everything is okay2', function (){
		//assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
		//expect(answer, 'topic[answer]').to.equal(43);
		beverages.should.have.property('tea').with.length(3);
	});

});

