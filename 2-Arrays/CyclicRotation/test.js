
const assert = require('assert');

const solution = require('./solution');


assert.deepStrictEqual(
  solution([3, 8, 9, 7, 6], 1),
  [6, 3, 8, 9, 7],
  'Sample #1'
);

assert.deepStrictEqual(
  solution([3, 8, 9, 7, 6], 3),
  [9, 7, 6, 3, 8],
  'Sample #2'
);

assert.deepStrictEqual(
  solution([0, 0, 0], 1),
  [0, 0, 0],
  'Sample #3'
);

assert.deepStrictEqual(
  solution([1, 2, 3, 4], 4),
  [1, 2, 3, 4],
  'Sample #4'
);

assert.deepStrictEqual(
  solution([], 50), [],
  'Sample #5'
);

assert.deepStrictEqual(
  solution([1, 2, 3], 0),
  [1, 2, 3],
  'Sample #6'
);

assert.deepStrictEqual(
  solution([1, 2, 3], 7),
  [3, 1, 2],
  'Sample #7'
);


console.log('All tests OK');
