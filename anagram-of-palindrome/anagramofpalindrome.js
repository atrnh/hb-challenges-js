/**
 * Is the word an anagram of a palindrome?
 *
 * @param  word  a string to evaluate
 * @return       boolean of whether or not word is an anagram of a palindrome
 */
const isAnagramOfPalindrome = word => {
  // Start solution here
};


/**
 * Node.js and Jasmine stuff.
 */
module.exports = isAnagramOfPalindrome;

const Jasmine = require('jasmine');
const jasmine = new Jasmine();

jasmine.onComplete(passed => {
  passed ?
    console.log('All tests passed!') :
    console.log('At least one spec has failed.');
});

jasmine.execute(['./anagramofpalindromeSpec.js']);
