/**
Does a given string have balanced pairs of brackets?

Given a string, return True or False depending on whether the string
contains balanced (), {}, [], and/or <>.

Many of the same test cases from Balance Parens apply to the expanded
problem, with the caveat that they must check all types of brackets.

These are fine::

   >>> hasBalancedBrackets("<ok>")
   true

   >>> hasBalancedBrackets("<{ok}>")
   true

   >>> hasBalancedBrackets("<[{(yay)}]>")
   true

These are invalid, since they have too many open brackets::

   >>> hasBalancedBrackets("(Oops!){")
   false

   >>> hasBalancedBrackets("{[[This has too many open square brackets.]}")
   false

These are invalid, as they close brackets that weren't open::

   >>> hasBalancedBrackets(">")
   false

   >>> hasBalancedBrackets("(This has {too many} ) closers. )")
   false

Here's a case where the number of brackets opened matches
the number closed, but in the wrong order::

    >>> hasBalancedBrackets("<{Not Ok>}")
    false

If you receive a string with no brackets, consider it balanced::

   >>> hasBalancedBrackets("No brackets here!")
   true
**/


/**
 * Does a given string have balanced pairs of brackets?
 * Brackets are (), {}, [], and/or <>
 *
 * @param  phrase  the input string
 * @return         boolean depending on whether the string contains balanced
 *                 brackets.
 */
const hasBalancedBrackets = phrase => {

  // Start solution here

};


/**
 * Node.js and Jasmine stuff.
 */
module.exports = hasBalancedBrackets;

const Jasmine = require('jasmine');
const jasmine = new Jasmine();

jasmine.onComplete(passed => {
  passed ?
    console.log('All tests passed!') :
    console.log('At least one spec has failed.');
});

jasmine.execute(['./balancedbracketsSpec.js']);
