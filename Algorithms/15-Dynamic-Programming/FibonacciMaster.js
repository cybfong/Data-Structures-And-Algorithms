// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

// O(n)
let calculations = 0;
function fibonacciMaster() {
  // Store pre-calculated answers
  let cache = {};
  // Use closures
  return function fib(n) {
    calculations++;
    // Use memoization and store results to eliminate repeating process
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const fasterFib = fibonacciMaster();
console.log("DP : ", fasterFib(100));
console.log("Total calculations  : ", calculations);

// --------------------------------------------------
// The following is solution code
// --------------------------------------------------
// function fibonacci(n) {
//   //O(2^n)

//   if (n < 2) {
//     return n;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// function fibonacciMaster() {
//   //O(n)
//   let cache = {};
//   return function fib(n) {
//     calculations++;
//     if (n in cache) {
//       return cache[n];
//     } else {
//       if (n < 2) {
//         return n;
//       } else {
//         cache[n] = fib(n - 1) + fib(n - 2);
//         return cache[n];
//       }
//     }
//   };
// }

// function fibonacciMaster2(n) {
//   let answer = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     answer.push(answer[i - 2] + answer[i - 1]);
//   }
//   return answer.pop();
// }
