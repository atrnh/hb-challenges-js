/**
 * Is this tree a valid BST?
 */
isValid() {
  /**
   * Check this node & recurse to children
   *
   * @param  lt  left children must be <= this
   * @param  gt  right child must be >= this
   */
  const ok = (n, lt, gt) => {
    if (n === null) {
      // base case: this isn't a node
      return true;
    }

    if (lt !== null && n.data > lt) {
      // base case: bigger than allowed
      // we'll fail fast here
      return false;
    }

    if (gt !== null && n.data < gt) {
      // base case: smaller than allowed
      // we'll fail fast here
      return false;
    }

    if (!ok(n.left, n.data, gt)) {
      // general case: check our left child
      //   all descendents of left child must be less than our data (and
      //   greater than whatever we had to be greater than).
      //   if not, fail fast.
      return false;
    }

    if(!ok(n.right, lt, n.data)) {
      // general case: check our right child
      //   all descendents of right child must be greater than our data (and
      //   less than whatever we had to be less than)
      //   if not, fail fast.
      return false;
    }

    // If we reach here, we're either a leaf node with valid data for lt/gt,
    // or we're higher up, but our recursive calls downward succeed. Either
    // way, this is our winning base case.
    return true;
  };

  // Call our recursive function, starting here. Since we haven't yet gone
  // left or right, we don't know our 'lt' or 'gt' values yet, so pass null
  // for these.
  return ok(this, null, null);
}
}
