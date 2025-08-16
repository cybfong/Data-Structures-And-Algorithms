// Binary Search Tree implementation

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      let found = false;
      let tmpNode = this.root;
      while (!found) {
        // console.log(tmpNode);
        if (value > tmpNode.value) {
          if (!tmpNode.right) {
            tmpNode.right = newNode;
            found = true;
          } else {
            tmpNode = tmpNode.right;
          }
        } else {
          if (!tmpNode.left) {
            tmpNode.left = newNode;
            found = true;
          } else {
            tmpNode = tmpNode.left;
          }
        }
      }
    }
    return this;
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }

    let tmpNode = this.root;
    while (tmpNode) {
      // console.log(tmpNode);
      if (value === tmpNode.value) {
        return tmpNode;
      }

      if (value > tmpNode.value) {
        tmpNode = tmpNode.right;
      } else {
        tmpNode = tmpNode.left;
      }
    }

    console.log(`[${value}] not found.`);
    return false;
  }

  findParent(value) {
    if (!this.root) {
      return false;
    }

    let tmpNode = this.root;
    while (tmpNode) {
      // console.log(tmpNode);
      if (value === tmpNode.left.value || value === tmpNode.right.value) {
        return tmpNode;
      }

      if (value > tmpNode.value) {
        tmpNode = tmpNode.right;
      } else {
        tmpNode = tmpNode.left;
      }
    }

    console.log(`[${value}] not found.`);
    return false;
  }

  remove(value) {
    const target = this.lookup(value);

    if (target) {
      // CASE 1 : left and right are both null, just remove the node
      if (target.left === null && target.right === null) {
        console.log(
          `target node [${target.value}] does not have left AND right nodes`
        );

        const parent = this.findParent(value);
        // console.log(parent);
        if (parent.left.value === target.value) {
          parent.left = null;
        } else {
          parent.right = null;
        }
        return this;
      }

      // CASE 2 : only right is null, promote left node
      if (target.left !== null && target.right === null) {
        console.log(`target node [${target.value}] does not have right node`);

        target.value = target.left.value;
        target.left = null;
        return this;
      }

      // CASE 3 : only left is null, promote right node
      if (target.left === null && target.right !== null) {
        console.log(`target node [${target.value}] does not have left node`);

        target.value = target.right.value;
        target.right = null;
        return this;
      }

      // CASE 4 : left and right are not null
      if (target.left !== null && target.right !== null) {
        console.log(`target node [${target.value}] have left AND right nodes`);

        // STEP 1 : traverse to "first node to the right"
        let searchRootNode = target.right;

        // STEP 2 : traverse to the left, all the way to the "node where it's left node is null"
        while (searchRootNode.left !== null) {
          searchRootNode = searchRootNode.left;
        }
        console.log(`Found node to replace : ${searchRootNode.value}`);
        const parent = this.findParent(searchRootNode.value);
        console.log(parent);

        // STEP 3 : swap the value in target node with value from node at STEP 2
        target.value = searchRootNode.value;

        // STEP 4 : connect left of parent node to "right of the searchRootNode" !!
        parent.left = searchRootNode.right;
        return this;
      }
    }

    return false;
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

// const tree = new BinarySearchTree();
// tree.insert(9);
// tree.insert(4);
// tree.insert(6);
// tree.insert(20);
// tree.insert(170);
// tree.insert(15);
// tree.insert(2);
// tree.insert(17);
// tree.insert(16);
// console.log(JSON.stringify(traverse(tree.root)));
//tree.remove(15);
// tree.remove(9);
//tree.remove(170);
// console.log(tree.lookup(20));
// console.log(tree.lookup(200));
// console.log(tree.lookup(170));
//     9
//  4     20
//1  6  15  170

// console.log(JSON.stringify(traverse(tree.root)));

module.exports = { BinarySearchTree, Node, traverse };
