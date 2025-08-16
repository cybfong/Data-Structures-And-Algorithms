const { BinarySearchTree, Node, traverse } = require("./BinarySearchTree"); // Import the class

const validate = (root) => {
  let stack = [];
  let current = root;
  let prev = null;

  while (current !== null || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack[stack.length - 1];
    // console.log(current, prev);
    stack.pop();

    if (prev !== null && current.value <= prev.value) {
      return false;
    }

    prev = current;

    current = current.right;
  }

  return true;
};

const validateRecursive = (root, min, max) => {
  // console.log(root, min, max);
  // base case 1
  if (root === null) return true;
  // base case 2
  if (root.value <= min || root.value >= max) {
    return false;
  }
  return (
    validateRecursive(root.left, min, root.value) &&
    validateRecursive(root.right, root.value, max)
  );
};

const tree = new BinarySearchTree();
tree.root = new Node(9);

tree.root.left = new Node(5);
// tree.root.left = new Node(1); // trigger invalid BST
tree.root.right = new Node(20);

tree.root.left.left = new Node(3);
tree.root.left.right = new Node(7);

tree.root.right.left = new Node(10);
tree.root.right.right = new Node(50);

// console.log(validate(tree.root));
console.log(validateRecursive(tree.root, -Infinity, Infinity));

console.log(traverse(tree.root));
