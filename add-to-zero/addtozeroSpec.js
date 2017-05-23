const addToZero = require('./addtozero.js');

describe('Given an array of ints', () => {
  it('returns false for an empty array', () => {
    expect(addToZero([])).toEqual(false);
  });

  it('returns true if any two nums in the array sum to 0', () => {
    expect(addToZero([1, 2, 3, -2])).toEqual(true);
  });

  it('returns false if no two nums in the array sum to 0', () => {
    expect(addToZero([1])).toEqual(false);
    expect(addToZero([1, 2, 3])).toEqual(false);
  });
});
