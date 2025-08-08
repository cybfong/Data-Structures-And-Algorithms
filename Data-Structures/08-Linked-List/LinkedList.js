// Singly Linked List implementation

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

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

        newNode.next = currentNode.next;
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
        // currentNode = null;
        this.length--;
        break;
      }
      currentNode = currentNode.next;
      idx++;
    }
    return this.printList();
  }

  reverse() {
    let currentNode = this.head;
    let prev = null;

    // if (this.length === 1) {
    //   console.log("Only 1 element in the list...");
    //   return this;
    // }

    // reassign this.tail as currentNode
    this.tail = currentNode;

    while (currentNode != null) {
      // preserve for next step
      const next = currentNode.next;
      // point next to prev for currentNode
      currentNode.next = prev;
      // now set prev as currentNode for next round
      prev = currentNode;
      // move the currentNode to next node for next round
      currentNode = next;
    }

    // reassign this.head to prev
    this.head = prev;

    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
// myLinkedList.prepend(1);
// console.log(myLinkedList.insert(2, 99));
// myLinkedList.insert(100, 98);
// myLinkedList.insert(0, 88);
// console.log(myLinkedList.printList());
// myLinkedList.remove(2);
// myLinkedList.remove(2);
console.log(myLinkedList.printList());
myLinkedList.reverse();
console.log(myLinkedList.printList());
// console.log(myLinkedList.printList());
// myLinkedList.insert(0, 97);

// console.log(myLinkedList);

// --------------------------------------------------
// The following is solution code
// --------------------------------------------------
// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value) {
//     const newNode = {
//       value: value,
//       next: null,
//     };
//     console.log(newNode);
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }
//   prepend(value) {
//     const newNode = {
//       value: value,
//       next: null,
//     };
//     newNode.next = this.head;
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
//     return array;
//   }
//   insert(index, value) {
//     //Check for proper parameters;
//     if (index >= this.length) {
//       console.log("yes");
//       return this.append(value);
//     }

//     const newNode = {
//       value: value,
//       next: null,
//     };
//     const leader = this.traverseToIndex(index - 1);
//     const holdingPointer = leader.next;
//     leader.next = newNode;
//     newNode.next = holdingPointer;
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
//   reverse() {
//     if (!this.head.next) {
//       return this.head;
//     }
//     let first = this.head;
//     this.tail = this.head;
//     let second = first.next;

//     while (second) {
//       const temp = second.next;
//       second.next = first;
//       first = second;
//       second = temp;
//     }

//     this.head.next = null;
//     this.head = first;
//     return this.printList();
//   }
// }
