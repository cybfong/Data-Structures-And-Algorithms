const { BinarySearchTree, traverse } = require("./BinarySearchTree"); // Import the class

const breadthFirstSearchR = (queue, list) => {
  if (!queue.length) {
    return list;
  }
  let currentNode = queue.shift();
  list.push(currentNode.value);
  if (currentNode.left) {
    queue.push(currentNode.left);
  }
  if (currentNode.right) {
    queue.push(currentNode.right);
  }
  return breadthFirstSearchR(queue, list);
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
console.log(breadthFirstSearchR([tree.root], []));

console.log(traverse(tree.root));

// --------------------------------------------------
// The following is solution code
// --------------------------------------------------
// BreadthFirstSearchR(queue, list) {
//   if (!queue.length) {
//     return list;
//   }
//   const currentNode = queue.shift();
//   list.push(currentNode.value);

//   if (currentNode.left) {
//     queue.push(currentNode.left);
//   }
//   if (currentNode.right) {
//     queue.push(currentNode.right);
//   }

//   return this.BreadthFirstSearchR(queue, list);
// }
