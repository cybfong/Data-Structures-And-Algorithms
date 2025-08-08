// Queue implemntation using Stacks

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.last;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.first.next = newNode;
      this.first = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    this.last = this.last.next;
    this.length--;
    return this;
  }

  //isEmpty;
  isEmpty() {
    return this.length === 0;
  }
}

const myQueue = new Queue();
myQueue.push("A");
myQueue.push("B");
myQueue.push("C");
myQueue.push("D");
console.log(myQueue.peek());
myQueue.pop();
console.log(myQueue.peek());
myQueue.pop();
console.log(myQueue.peek());
myQueue.pop();
// myQueue.pop();
console.log(myQueue.peek());
// console.log(myQueue.peek());
// console.log(myQueue.peek());
// console.log(myQueue.peek());
// console.log(myQueue.peek());
// console.log(myQueue.isEmpty());
// console.log(myQueue.isEmpty());
console.log(myQueue);

//Joy
//Matt
//Pavel
//Samir

// --------------------------------------------------
// The following is solution code
// --------------------------------------------------
// class CrazyQueue {
//   constructor() {
//     this.first = [];
//     this.last = [];
//   }

//   enqueue(value) {
//     const length = this.first.length;

//     for (let i = 0; i < length; i++) {
//       this.last.push(this.first.pop());
//     }

//     this.last.push(value);

//     return this;
//   }

//   dequeue() {
//     const length = this.last.length;

//     for (let i = 0; i < length; i++) {
//       this.first.push(this.last.pop());
//     }

//     this.first.pop();

//     return this;
//   }

//   peek() {
//     if (this.first.length > 0) {
//       return this.first[this.first.length - 1];
//     }

//     return this.last[0];
//   }
// }
