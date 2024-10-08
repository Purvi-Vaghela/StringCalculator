const { expect } = require('chai');
const { add } = require('../stringCalculator');

describe('String Calculator', () => {

    //empty string
    it('should return 0 for an empty string', () => {
        expect(add("")).to.equal(0);
    });
    // single number
    it('should return the number itself for a single number', () => {
        expect(add("1")).to.equal(1);
    });
    // sum of two numbers
    it('should return the sum of two numbers', () => {
        expect(add("1,2")).to.equal(3);
    });
    //sum of multiple numbers
    it('should return the sum of multiple numbers', () => {
        expect(add("1,2,3")).to.equal(6);
    });
    //New Line
    it('should handle new lines', () => {
        expect(add("1\n2,3")).to.equal(6);
    });
    //custom delimiters
    it('should handle custom delimiters', () => {
        expect(add("//;\n1;2")).to.equal(3);
    });
    // err for negative numbers
    it('should throw an error for negative numbers', () => {
        expect(() => add("1,-2,3")).to.throw('negative numbers not allowed: -2');
    });
    it('should show all negative numbers in message', () => {
        expect(() => add("1,-2,-3")).to.throw('negative numbers not allowed: -2,-3');
    });

    




});
