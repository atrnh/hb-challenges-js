const binarySearch = require('./binarysearch.js');

describe('Searching for', () => {
  it('50 should require 1 guess', () => {
    expect(binarySearch(50)).toEqual(1);
  });

  it('25 should require 2 guesses', () => {
    expect(binarySearch(25)).toEqual(2);
  });

  it('75 should require 2 guesses', () => {
    expect(binarySearch(75)).toEqual(2);
  });

  it('31 should require less than or equal to 7 guesses', () => {
    expect(binarySearch(31)).toBeLessThanOrEqual(7);
  });

  it('any number should require at most 7 guesses', () => {
    const guesses = [];
    for (let i = 1; i < 101; i++) {
      guesses.push(binarySearch(i));
    }

    expect(Math.max(...guesses)).toEqual(7);
  });
});
