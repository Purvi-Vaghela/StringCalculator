const { expect } = require('chai');
const { add } = require('../stringCalculator');

describe('String Calculator', () => {

    it('should return 0 for an empty string', () => {
        expect(add("")).to.equal(0);
    });

});
