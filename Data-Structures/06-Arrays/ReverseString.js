// An exercise to reverse a string

// O(n)
const reverseString = (str) => {
  const result = [];

  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }

  // return String value
  return result.join("");
};

console.log(reverseString("A test string."));

// Can use built-in functions too
// const str = `A second test string`;
// console.log(
//   `Reversed str with built in function = ${str.split("").reverse().join("")}`
// );
