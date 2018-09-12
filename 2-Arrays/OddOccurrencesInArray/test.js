
const assert = require('assert');

const solution = require('./solution-3');


assert.equal(solution([9, 3, 9, 3, 9, 7, 9]),       7, 'Sample #1');
assert.equal(solution([4, 1, 5, 2, 3, 3, 1, 4, 5]), 2, 'Sample #2');


console.log('All tests OK');
