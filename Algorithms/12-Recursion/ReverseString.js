// An exercise to implement reverse string logic with iterative and recursive approach

function reverseString(str) {
  console.log(str);
  const answer = [];
  for (let i = str.length - 1; i >= 0; i--) {
    answer.push(str[i]);
    // console.log(str[i]);
  }
  // console.log(answer);
  return answer.join("");
}

function reverseStringRecursive(str) {
  if (str.length === 0) {
    return str;
  }
  // 1. use substring function to extract the string with 1 character ahead then pass into resurve function
  // 2. add character at "positon 0 of that str" to the end of the result, each time when recursive function returns
  return reverseStringRecursive(str.substring(1)) + str[0];
}

// console.log(reverseString("yoyo master"));
console.log(reverseStringRecursive("yoyo master boy"));

// --------------------------------------------------
// The following is solution code
// --------------------------------------------------
// function reverseString(str) {
//   let arrayStr = str.split("");
//   let reversedArray = [];
//   //We are using closure here so that we don't add the above variables to the global scope.
//   function addToArray(array) {
//     if (array.length > 0) {
//       reversedArray.push(array.pop());
//       addToArray(array);
//     }
//     return;
//   }
//   addToArray(arrayStr);
//   return reversedArray.join("");
// }

// function reverseStringRecursive(str) {
//   if (str === "") {
//     return "";
//   } else {
//     return reverseStringRecursive(str.substr(1)) + str.charAt(0);
//   }
// }
