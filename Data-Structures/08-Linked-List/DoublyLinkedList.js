// Doubly Linked List implementation

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    this.head.prev = newNode;
    newNode.next = this.head;
    // console.log(newNode);
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    if (index === 0) {
      return this.prepend(value);
    }

    let currentNode = this.head;
    let idx = 0;
    while (currentNode !== null) {
      if (idx === index - 1) {
        const newNode = new Node(value);

        newNode.prev = currentNode;
        newNode.next = currentNode.next;

        currentNode.next.prev = newNode;
        currentNode.next = newNode;

        this.length++;
        break;
      }
      currentNode = currentNode.next;
      idx++;
    }
    return this.printList();
  }

  remove(index) {
    if (index >= this.length) {
      return this.printList();
    }

    let currentNode = this.head;
    let idx = 0;
    while (currentNode !== null) {
      if (idx === index - 1) {
        // console.log(currentNode.value);
        currentNode.next = currentNode.next.next;
        currentNode.next.prev = currentNode;

        // currentNode = null;
        this.length--;
        break;
      }
      currentNode = currentNode.next;
      idx++;
    }
    return this.printList();
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
// console.log(myLinkedList.printList());
console.log(myLinkedList.insert(1, 99));
myLinkedList.insert(100, 98);
myLinkedList.insert(0, 88);
console.log(myLinkedList.printList());
myLinkedList.remove(2);
// myLinkedList.remove(2);
console.log(myLinkedList.printList());
// myLinkedList.insert(0, 97);

// console.log(myLinkedList);

// --------------------------------------------------
// The following is solution code
// --------------------------------------------------
// class DoublyLinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       prev: null,
//       next: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value) {
//     const newNode = {
//       value: value,
//       prev: null,
//       next: null,
//     };
//     newNode.prev = this.tail;
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }
//   prepend(value) {
//     const newNode = {
//       value: value,
//       prev: null,
//       next: null,
//     };
//     newNode.next = this.head;
//     this.head.prev = newNode;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }
//   printList() {
//     const array = [];
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       array.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     return console.log(array);
//   }
//   insert(index, value) {
//     //Check for proper parameters;
//     if (index >= this.length) {
//       console.log("yes");
//       return this.append(value);
//     }

//     const newNode = {
//       value: value,
//       prev: null,
//       next: null,
//     };
//     const leader = this.traverseToIndex(index - 1);
//     const follower = leader.next;
//     leader.next = newNode;
//     newNode.prev = leader;
//     newNode.next = follower;
//     follower.prev = newNode;
//     this.length++;
//     return this.printList();
//   }
//   traverseToIndex(index) {
//     //Check parameters
//     let counter = 0;
//     let currentNode = this.head;
//     while (counter !== index) {
//       currentNode = currentNode.next;
//       counter++;
//     }
//     return currentNode;
//   }
//   remove(index) {
//     // Check Parameters
//     const leader = this.traverseToIndex(index - 1);
//     const unwantedNode = leader.next;
//     leader.next = unwantedNode.next;
//     this.length--;
//     return this.printList();
//   }
// }
