
const assert = require('assert');


assert.equal(solution(9),   2, '9 === 2');
assert.equal(solution(529), 4, '529 === 4');
assert.equal(solution(20),  1, '20 === 1');
assert.equal(solution(15),  0, '15 === 0');
assert.equal(solution(32),  0, '32 === 0');


function solution(number) {

  const string = dec2bin(number);

  let maxGapLength = 0;
  let gapLength = 0;
  let digit, prevDigit;

  for (let i = 0, imax = string.length - 1; i <= imax; i++) {

    digit = string[i];

    if ('1' === prevDigit && '0' === digit) {
      gapLength = 1;
    } else if ('0' === prevDigit && '0' === digit) {
      gapLength++;
    } else if ('0' === prevDigit && '1' === digit) {
      if (gapLength > maxGapLength) {
        maxGapLength = gapLength;
      }
    }

    prevDigit = digit;

  }

  return maxGapLength;


  function dec2bin(dec) {
    return (dec >>> 0).toString(2);
  }

}
