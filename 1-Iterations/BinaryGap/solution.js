
module.exports = function solution(number) {

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

};
