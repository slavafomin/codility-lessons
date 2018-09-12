
module.exports = function solution(array, rotations) {

  rotations %= array.length;

  return [
    ...array.slice(-1 * rotations),
    ...array.slice(0, -1 * rotations)
  ];

};
