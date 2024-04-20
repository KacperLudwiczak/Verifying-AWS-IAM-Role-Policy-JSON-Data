const verifyingJSON = require('./index');

describe('Policy JSON Verifying', () => {
    test('Should return true if an input JSON Resource field not contains a single asterisk', () => {
        expect(verifyingJSON('policyWithoutAsterisk.json')).toBe(true);
    });

    test('Should return false if an input JSON Resource field contains a single asterisk', () => {
        expect(verifyingJSON('policyWithAsterisk.json')).toBe(false);
    });
});