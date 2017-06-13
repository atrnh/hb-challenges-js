/**
 * Binary search tree node.
 */
class Node {
  constructor(data, left=null, right=null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  /**
   * Is this tree a valid BST?
   */
  isValid() {
    // Start solution here
  };
}


/**
 * Node.js and Jasmine stuff.
 */
module.exports = Node;

const Jasmine = require('jasmine');
const jasmine = new Jasmine();

jasmine.onComplete(passed => {
  passed ?
    console.log('All tests passed!') :
    console.log('At least one spec has failed.');
});

jasmine.execute(['./bstvalidSpec.js']);
