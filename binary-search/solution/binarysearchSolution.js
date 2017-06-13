/**
 * Using a binary search, find val in range 1-100. Return # of guesses.
 */
const binarySearch = val => {
  assert.ok((0 < val && val < 101), 'Val must be between 1-100');

  let numGuesses = 0;

  // START SOLUTION

  let higherThan = 0;
  let lowerThan = 101;
  let guess = null;

  while (guess !== val) {
    numGuesses++;
    guess = Math.round((lowerThan + higherThan) / 2);

    if (guess < val) {
      higherThan = guess;
    } else if (val < guess) {
      lowerThan = guess;
    }
  }

  // END SOLUTION

  return numGuesses;
};
