
/**
 * The final solution is to just sort the array in order to group all the pairs together
 * and then to iterate the array until unmatched pair is found.
 */
module.exports = function solution(array) {

  array.sort();

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
