
module.exports = function solution(position, targetPosition, jumpLength) {

  return Math.ceil((targetPosition - position) / jumpLength);

};
