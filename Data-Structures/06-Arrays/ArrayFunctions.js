// Objective is to understand major array functions

const strings = ["a", "b", "c", "d"];

// push - add to th end
strings.push("e"); // O(1)
console.log(strings);

// pop - remove last item
strings.pop(); // O(1)
console.log(strings);

// unshift - add to beginning (shift : remove from beginning)
strings.unshift("x"); // O(n)
console.log(strings);

// slice - returns shallow copy of array, end is not included. Original array not being modified
// return items from 2nd position
console.log(strings.slice(2)); // O(n)
// return items from 2nd to 3rd position
console.log(strings.slice(2, 4)); // O(n)
// return last 2 items
console.log(strings.slice(-2)); // O(n)
// return items from 2nd to 2nd last position
console.log(strings.slice(2, -1)); // O(n)

// splice - insert/replace item to location specified
strings.splice(2, 0, "alien"); // O(n)
// Expected output: [ 'x', 'a', 'alien', 'b', 'c', 'd' ]
// strings.splice(2, 1, "predator"); // O(n)
// Expected output: [ 'x', 'a', 'predator', 'b', 'c', 'd' ]
console.log(strings);

console.log(strings[2]); // O(1)
