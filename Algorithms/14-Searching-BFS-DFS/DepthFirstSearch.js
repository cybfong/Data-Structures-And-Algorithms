const { BinarySearchTree } = require("./BinarySearchTree"); // Import the class

function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}

function traversePreOrder(node, list) {
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }

  return list;
}

function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
//     9
//  4     20
//1  6  15  170

// 1, 4, 6, 9, 15, 20, 170
console.log("In Order : ", traverseInOrder(tree.root, []));

// 9, 4, 1, 6, 20, 15, 170
console.log("Pre Order : ", traversePreOrder(tree.root, []));

// 1, 6, 4, 15, 170, 20, 9
console.log("Post Order : ", traversePostOrder(tree.root, []));

// --------------------------------------------------
// The following is solution code
// --------------------------------------------------
// function traverseInOrder(node, list) {
//   console.log(node.value);
//   if (node.left) {
//     traverseInOrder(node.left, list);
//   }
//   list.push(node.value);
//   if (node.right) {
//     traverseInOrder(node.right, list);
//   }
//   return list;
// }

// function traversePreOrder(node, list) {
//   console.log(node.value);
//   list.push(node.value);
//   if (node.left) {
//     traversePreOrder(node.left, list);
//   }

//   if (node.right) {
//     traversePreOrder(node.right, list);
//   }
//   return list;
// }

// function traversePostOrder(node, list) {
//   console.log(node.value);
//   if (node.left) {
//     traversePostOrder(node.left, list);
//   }

//   if (node.right) {
//     traversePostOrder(node.right, list);
//   }
//   list.push(node.value);
//   return list;
// }
