/**
 * Linked list node
 */
class Node {
  constructor(data=null, next=null) {
    this.data = data;
    this.next = next;
  }

  /**
   * Represent data for this node and its succcessors as a string, in reverse
   * order.
   *
   * Ex: A list of 3 -> 2 -> 1 would return '123'
   */
  asRevString() {
    const out = [];
    let n = this;

    while (n) {
      out.push(n.data.toString());
      n = n.next;
    }

    return out.reverse().join('');
  }
};


/**
 * Given two linked lists, treat like numbers and add together.
 *
 * @param  l1  the had node of a linked list in "reverse-digit" format
 * @param  l2  the head node of another "reverse-digit" format
 * @returns    head node of linked list of sum in "reverse-digit" format.
 */
const addLinkedLists = (l1, l2) => {
  // Write your solution here!
};


/**
 * Node.js and Jasmine stuff.
 */
exports.Node = Node;
exports.addLinkedLists = addLinkedLists;

const Jasmine = require('jasmine');
const jasmine = new Jasmine();

jasmine.onComplete(passed => {
  passed ?
    console.log('All tests passed!') :
    console.log('At least one spec as failed.');
});

jasmine.execute(['addllSpec.js']);
