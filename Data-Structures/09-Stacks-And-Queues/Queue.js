// Queue implementation

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
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    this.first = this.first.next;
    this.length--;
    if (this.isEmpty()) {
      this.last = null;
    }
    return this;
  }

  //isEmpty;
  isEmpty() {
    return this.length === 0;
  }
}

const myQueue = new Queue();
myQueue.enqueue("A");
myQueue.enqueue("B");
// console.log(myQueue.peek());
// myQueue.dequeue();
// console.log(myQueue.peek());
myQueue.enqueue("C");
myQueue.enqueue("D");
// console.log(myQueue.peek());
myQueue.dequeue();
// console.log(myQueue.peek());
// myQueue.dequeue();
// console.log(myQueue.peek());
// console.log(myQueue.isEmpty());
// myQueue.dequeue();
// console.log(myQueue.isEmpty());
// myQueue.dequeue();
console.log(myQueue);

//Joy
//Matt
//Pavel
//Samir

// --------------------------------------------------
// The following is solution code
// --------------------------------------------------
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.length = 0;
//   }
//   peek() {
//     return this.first;
//   }
//   enqueue(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       this.last.next = newNode;
//       this.last = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   dequeue() {
//     if (!this.first) {
//       return null;
//     }
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     this.first = this.first.next;
//     this.length--;
//     return this;
//   }
//   //isEmpty;
// }
