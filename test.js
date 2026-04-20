const assert = require('assert');
const app = require('./app');

try {
    assert.ok(app, "The app should be defined");
    console.log("Test Passed: App is defined and loadable.");
    process.exit(0);
} catch (error) {
    console.error("Test Failed:", error);
    process.exit(1);
}
