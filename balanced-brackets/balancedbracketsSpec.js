const hasBalancedBrackets = require('./balancedbrackets.js');

describe('Checking if the input has balanced brackets', () => {
  it('returns true if the brackets are balanced', () => {
    expect(hasBalancedBrackets('<ok>')).toEqual(true);
    expect(hasBalancedBrackets('<{ok}>')).toEqual(true);
    expect(hasBalancedBrackets('<[{(yay)}]>')).toEqual(true);
  });

  it('returns false if there are too many open brackets', () => {
    expect(hasBalancedBrackets('(Oops!){')).toEqual(false);
    expect(
      hasBalancedBrackets('{[[This has too many open square brackets]}')
    ).toEqual(false);
  });

  it('returns false if they close brackets that weren\'t open', () => {
    expect(hasBalancedBrackets('>')).toEqual(false);
    expect(
      hasBalancedBrackets('(This has {too many}) closers.)')
    ).toEqual(false);
  });

  it('returns false if the brackets are closed in the wrong order', () => {
    expect(hasBalancedBrackets('<{Not Ok>}')).toEqual(false);
  });

  it('returns true if the input has no brackets', () => {
    expect(hasBalancedBrackets('No brackets here!')).toEqual(true);
  });
});
