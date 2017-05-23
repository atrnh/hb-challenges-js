/**
 * Given an array of integers, return true if any two nums in the array
 * sum to 0.
 *
 * @param    nums  an array of integers
 * @returns        boolean if any two integers sum to 0
 */
const addToZero = (nums) => {
  const set = new Set();
  for (let n of nums) {
    if (set.has(n * -1)) {
      return true;
    } else {
      set.add(n);
    }
  }
  return false;
};


/**
 * Node.js and Jasmine stuff.
 */
module.exports = addToZero;

const Jasmine = require('jasmine');
const jasmine = new Jasmine();

jasmine.onComplete(passed => {
  passed ?
    console.log('All tests passed!') :
    console.log('At least one spec as failed.');
});

jasmine.execute(['addtozeroSpec.js']);
