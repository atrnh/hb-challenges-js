class Node {
  // ...

  insert(newData) {
    // Insert @param newData new node to BST tree rooted here.

    // START SOLUTION

    if (newData >= this.data) {
      this.right ? this.right.insert(newData) : this.right = new Node(newData);
    } else {
      this.left ? this.left.insert(newData) : this.left = new Node(newData);
    }
  }
}
