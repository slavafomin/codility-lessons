
/**
 * This time, we are using map to mark already paired elements.
 */
module.exports = function solution(array) {

  // Cloning the array
  const paired = [];

  let pairFound;

  for (let i = 0, imax = array.length - 1; i <= imax; i++) {

    // Skipping already paired element
    if (true === paired[i]) {
      continue;
    }

    pairFound = false;

    // Looking for pair
    for (let j = i + 1; j <= imax; j++) {

      // Skipping already paired element
      if (true === paired[j]) {
        continue;
      }

      if (array[i] === array[j]) {
        paired[j] = true; // marking element as paired
        pairFound = true;
        break;
      }

    }

    // Returning if pair is not found
    if (!pairFound) {
      return array[i];
    }

  }

};
