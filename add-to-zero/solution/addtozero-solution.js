/**
 * Given an array of integers, return true if any two nums in the array
 * sum to 0.
 *
 * @param    nums  an array of integers
 * @returns        boolean if any two integers sum to 0
 */
const addToZero = (nums) => {
  // START SOLUTION

  // Optimization: given that we're going to be saying "X in nums" below, let's
  // make a set of nums, so that check can happen in O(1) time, rather than
  // O(n) time.

  const setNums = Set(nums);

  // It's easier and faster to look for -n in the list, rather than getting
  // each pair and adding them (and JavaScript considers -0 === 0)

  for (let n of nums) {
    if (setNums.has(-n)) {
      return true;
    }
  }
  
  return false;

  // As a more advanced note, you could use `Array.prototype.find` with the
  // ternary operator to write this in a very pretty & functional manner
  // with the proper return values:

  // return nums.find(n => { return setNums.has(-n); }) ? true : false;
);
