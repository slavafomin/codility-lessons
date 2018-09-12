
const assert = require('assert');

const solution = require('./solution');


assert.equal(solution(9),   2, '9 === 2');
assert.equal(solution(529), 4, '529 === 4');
assert.equal(solution(20),  1, '20 === 1');
assert.equal(solution(15),  0, '15 === 0');
assert.equal(solution(32),  0, '32 === 0');

console.log('All tests OK');
