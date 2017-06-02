/**
 * Does a given string have balanced pairs of brackets?
 * Brackets are (), {}, [], and/or <>
 *
 * @param  phrase  the input string
 * @return         boolean depending on whether the string contains balanced
 *                 brackets.
 */
const hasBalancedBrackets = phrase => {

  // START SOLUTION

  const closersToOpeners = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
    ['>', '<']
  ]);

  // Set of all opener characters; used to match openers quickly.
  const openers = new Set(closersToOpeners.values());

  // Create an empty array to use as a stack.
  const openersSeen = [];

  for (const char of phrase) {

    // Push open prackets onto the stack.

    if (openers.has(char)) {
      openersSeen.push(char);
    } else if (closersToOpeners.get(char)) {
      // For closers:
      //
      // - if nothing is open; fail fast
      // - if we are the twin of the most recent opener, pop and continue
      // - else we're the twin to a different opener; fail fast

      if (openersSeen.length === 0) {
        return false;
      }

      if (openersSeen[openersSeen.length - 1] === closersToOpeners.get(char)) {
        openersSeen.pop();
      } else {
        return false;
      }
    }
  }

  // An empty stack means the brackets are balanced.
  return openersSeen.length === 0;
};
