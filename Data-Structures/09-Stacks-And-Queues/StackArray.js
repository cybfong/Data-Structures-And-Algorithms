// Stack Array implementation

class Stack {
  constructor() {
    this.items = [];
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  push(value) {
    this.items.push(value);
    return this;
  }

  pop() {
    this.items.pop();
    return this;
  }

  //isEmpty
  isEmpty() {
    return this.items.length === 0;
  }
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");
console.log(myStack.peek());
console.log(myStack);

myStack.pop();
myStack.pop();

console.log(myStack);

// --------------------------------------------------
// The following is solution code
// --------------------------------------------------
// class Stack {
//   constructor() {
//     this.array = [];
//   }
//   peek() {
//     return this.array[this.array.length - 1];
//   }
//   push(value) {
//     this.array.push(value);
//     return this;
//   }
//   pop() {
//     this.array.pop();
//     return this;
//   }
// }
