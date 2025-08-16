const { BinarySearchTree, traverse } = require("./BinarySearchTree"); // Import the class

const breadthFirstSearch = (node) => {
  let currentNode = node;
  const list = [];
  const queue = [];
  queue.push(currentNode);

  while (queue.length > 0) {
    currentNode = queue.shift();
    // console.log(currentNode.value);
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    console.log(queue);
  }

  return list;
};

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

// 9,  4,  20, 1,  6, 15, 170
console.log(breadthFirstSearch(tree.root));

console.log(traverse(tree.root));

// --------------------------------------------------
// The following is solution code
// --------------------------------------------------
// BreadthFirstSearch() {
//   let currentNode = this.root;
//   let list = [];
//   let queue = [];
//   queue.push(currentNode);

//   while (queue.length > 0) {
//     currentNode = queue.shift();
//     list.push(currentNode.value);
//     if (currentNode.left) {
//       queue.push(currentNode.left);
//     }
//     if (currentNode.right) {
//       queue.push(currentNode.right);
//     }
//   }
//   return list;
// }
