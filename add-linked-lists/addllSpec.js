const Node = require('./addll.js').Node;
const addLinkedLists = require('./addll.js').addLinkedLists;

describe('Adding two linked lists', () => {
  const l1 = new Node(3, new Node(2, new Node(1)));
  const l2 = new Node(6, new Node(5, new Node(4)));

  const answer = addLinkedLists(l1, l2);

  it('returns a Node', () => {
    expect(answer.constructor.name).toEqual('Node');
  });

  it('returns the sum', () => {
    expect(answer.asRevString()).toEqual('579');
  });

  it('adds lists of different lengths', () => {
    expect(addLinkedLists(l3, l4).asRevString()).toEqual('1290');
  });
});
