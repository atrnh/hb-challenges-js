/**
 * Is the word an anagram of a palindrome?
 *
 * @param  word  a string to evaluate
 * @return       boolean of whether or not word is an anagram of a palindrome
 */
const isAnagramOfPalindrome = word => {
  // START SOLUTION

  const seen = new Map();

  // Count each letter

  for (let letter of word) {
    let count = seen.get(letter) || 0;
    seen.set(letter, count + 1);
  }

  // It's a palindrome if the number of odd-counts is either 0 or 1

  let seenAnOdd = false;

  for (let [letter, count] of seen) {
    if (count % 2 !== 0) {
      if (seenAnOdd) {
        return false;
      }
      seenAnOdd = true;
    }
  }

  return true;
};
