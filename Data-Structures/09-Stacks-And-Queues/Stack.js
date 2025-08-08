// Stack implementation

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    // const nodeToPop = this.top;
    // console.log(nodeToPop);
    // this.top = nodeToPop.next;
    // nodeToPop = null;
    this.top = this.top.next;
    this.length--;
    if (this.length === 0) {
      this.bottom = null;
    }
    return this;
  }

  //isEmpty
  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();

myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");
// myStack.push("StackOverflow");
console.log(myStack.peek());

// console.log(myStack);

myStack.pop();
myStack.pop();

// console.log(myStack.isEmpty());
myStack.pop();
myStack.pop();

console.log(myStack);

// myStack.pop();
// console.log(myStack.isEmpty());

// --------------------------------------------------
// The following is solution code
// --------------------------------------------------
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }
//   peek() {
//     return this.top;
//   }
//   push(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.top = newNode;
//       this.bottom = newNode;
//     } else {
//       const holdingPointer = this.top;
//       this.top = newNode;
//       this.top.next = holdingPointer;
//     }
//     this.length++;
//     return this;
//   }
//   pop() {
//     if (!this.top) {
//       return null;
//     }
//     if (this.top === this.bottom) {
//       this.bottom = null;
//     }
//     // const holdingPointer = this.top;
//     this.top = this.top.next;
//     this.length--;
//     return this;
//   }
//   //isEmpty
// }
