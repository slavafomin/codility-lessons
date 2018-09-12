
/**
 * The final solution is to just sort the array in order to group all the pairs together
 * and then to iterate the array until unmatched pair is found.
 */
module.exports = function solution(array) {

  // In real application we would probably want to clone the array first
  array.sort();

  // Iterating two consecutive elements at a time
  for (let i = 0, j = 1, imax = array.length - 1; i <= imax; i += 2, j += 2) {

    // Last element left unpaired
    if (i === imax) {
      return array[i];
    }

    // Looking for unpaired elements
    if (array[i] !== array[j]) {
      return array[i];
    }

  }

};
