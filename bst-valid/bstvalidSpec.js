const Node = require('./bstvalid.js');

describe('Checking 3 binary trees:', () => {
  const t1 = new Node(4,
              new Node(2, new Node(1), new Node(3)),
              new Node(6, new Node(5), new Node(7))
  );

  const t2 = new Node(4,
              new Node(2, new Node(3), new Node(3)),
              new Node(6, new Node(5), new Node(7))
  );

  const t3 = new Node(4,
              new Node(2, new Node(1), new Node(3)),
              new Node(6, new Node(1), new Node(7))
  );

  it('tree 1 is valid', () => {
    expect(t1.isValid()).toEqual(true);
  });

  it('tree 2 is not valid', () => {
    expect(t2.isValid()).toEqual(false);
  });

  it('tree 3 is not valid', () => {
    expect(t3.isValid()).toEqual(false);
  });
});
