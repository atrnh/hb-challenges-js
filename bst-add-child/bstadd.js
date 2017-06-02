/**

We'll start with this tree::

                4
           2         7
         1   3     5   8

like this::

    >>> t = new Node(4,
    ...       new Node(2, new Node(1), new Node(3)),
    ...       new Node(7, new Node(5), new Node(8))
    ... )


Adding 0 should end up on the far left::

                4
           2         7
         1   3     5   8
        0

like so::

    >>> t.insert(0)

    >>> t.left.left.left.data == 0
    True

    >>> t.left.left.right is None
    True


Adding 9 should end up on the far right::

                4
           2         7
         1   3     5   8
        0               9

like so::

    >>> t.insert(9)

    >>> t.right.right.right.data == 9
    True

    >>> t.right.right.left is None
    True


Adding 6 should end up to the right of the 5::

                4
           2         7
         1   3     5   8
        0           6   9

like so::

    >>> t.insert(6)

    >>> t.right.left.right.data == 6
    True

    >>> t.right.left.left is None
    True

**/


/**
 * Binary search tree node.
 */
class Node {
  constructor(data, left=null, right=null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  toString() {
    if (this.left === null && this.right === null) {
      return `Node ${ this.data }`;
    } else {
      return `Node ${ this.data } {l: ${ this.left }, r: ${ this.right }}`;
    }
  }

  insert(newData) {
    // Insert @param newData new node to BST tree rooted here.
  }
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

jasmine.execute(['bstaddSpec.js']);
