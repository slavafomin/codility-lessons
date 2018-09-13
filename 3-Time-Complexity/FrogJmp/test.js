
const assert = require('assert');

const solution = require('./solution');


assert.equal(solution(10, 85, 30), 3, 'Sample #1');
assert.equal(solution(10, 10, 30), 0, 'Sample #2');
assert.equal(solution(10, 90, 20), 4, 'Sample #3');
assert.equal(solution(0, 50, 50), 1, 'Sample #4');
assert.equal(solution(0, 1000000, 10), 100000, 'Sample #5');


console.log('All tests OK');
