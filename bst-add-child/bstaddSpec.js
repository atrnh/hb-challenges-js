const Node = require('./bstadd.js');

describe('Inserting', () => {
  const t = new Node(4,
              new Node(2, new Node(1), new Node(3)),
              new Node(7, new Node(5), new Node(8))
  );

  it('0 should end up on the far left', () => {
    t.insert(0);
    expect(t.left.left.left.data).toEqual(0);
    expect(t.left.left.right).toEqual(null);
  });

  it('9 should end up on the far right', () => {
    t.insert(9);
    expect(t.right.right.right.data).toEqual(9);
    expect(t.right.right.left).toEqual(null);
  });

  it('6 should end up to the right of the 5', () => {
    t.insert(6);
    expect(t.right.left.right.data).toEqual(6);
    expect(t.right.left.left).toEqual(null);
  });
});
