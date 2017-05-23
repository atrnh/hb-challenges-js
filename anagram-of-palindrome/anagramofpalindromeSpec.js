const isAnagramOfPalindrome = require('./anagramofpalindrome.js');

describe('Given a word', () => {
  it('returns true if the word is an anagram of a palindrome', () => {
    expect(isAnagramOfPalindrome('a')).toEqual(true);
    expect(isAnagramOfPalindrome('aab')).toEqual(true);
    expect(isAnagramOfPalindrome('arceace')).toEqual(true);
  });

  it('returns false if the word is not an anagram of a palindrome', () => {
    expect(isAnagramOfPalindrome('ab')).toEqual(false);
    expect(isAnagramOfPalindrome('arceaceb')).toEqual(false);
  });
});
