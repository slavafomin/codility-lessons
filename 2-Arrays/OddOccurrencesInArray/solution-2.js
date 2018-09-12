
/**
 * This time, we are using map to mark already paired elements.
 */
module.exports = function solution(array) {

  // Map to mark paired elements
  const paired = [];

  let pairFound;

  for (let i = 0, imax = array.length - 1; i <= imax; i++) {

    // Skipping already paired element
    if (isPaired(i)) {
      continue;
    }

    pairFound = false;

    // Looking for pair
    for (let j = i + 1; j <= imax; j++) {

      // Skipping already paired element
      if (isPaired(j)) {
        continue;
      }

      if (array[i] === array[j]) {
        markAsPaired(j);
        pairFound = true;
        break;
      }

    }

    // Returning if pair is not found
    if (!pairFound) {
      return array[i];
    }

  }


  function isPaired(i) {
    return (true === paired[i]);
  }

  function markAsPaired(i) {
    paired[i] = true;
  }

};
