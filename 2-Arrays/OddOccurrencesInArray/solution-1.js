
/**
 * The idea is to clone the original array and to remove all pairs from it incrementally
 * until one unpaired element lefts.
 */
module.exports = function solution(array) {

  // Cloning the array
  array = [...array];

  let pairFound;

  // Removing all pairs from the cloned array
  while (array.length > 1) {

    pairFound = false;

    // Looking for pair
    for (let i = 1, imax = array.length - 1; i <= imax; i++) {
      if (array[0] === array[i]) {
        // Removing pair elements from the array
        array.splice(i, 1);
        array.splice(0, 1);
        pairFound = true;
        break;
      }
    }

    // If pair is not found, then returning early
    if (!pairFound) {
      return array[0];
    }

  }

  // Returning the last unpaired element
  return array[0];

};
