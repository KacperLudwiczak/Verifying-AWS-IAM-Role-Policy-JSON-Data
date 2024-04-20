const fs = require('fs');

function verifyingJSON(filePath) {
    try {
        if (!fs.existsSync(filePath)) {
            console.error(`File not exist: ${filePath}`);
            return false;
        }

        const rawData = fs.readFileSync(filePath);
        const policyData = JSON.parse(rawData);

        if (!policyData || !policyData.PolicyDocument) {
            console.error('Invalid policy data');
            return false;
        }


        const statements = policyData.PolicyDocument.Statement;

        for (let statement of statements) {
            if (statement.Resource === "*") {
                return false;
            }
        }
        return true;

    } catch (error) {
        console.error('Error:', error);
        return false;
    }
}

module.exports = verifyingJSON;

// Test manual:
const policyWithAsterisk = verifyingJSON('policyWithAsterisk.json');
const policyWithoutAsterisk = verifyingJSON('policyWithoutAsterisk.json');
console.log('Should be false:', policyWithAsterisk);
console.log('Should be true:', policyWithoutAsterisk);