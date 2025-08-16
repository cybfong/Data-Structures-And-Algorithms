// An exercise to implement merge sort logic
// Stable and use if worry about worst case secenario : always O(n log n)

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// const numbers = [5, 3, 8, 4, 2];

// O(n log n) : divide and conquer, resurceively divde into smallest element and compare with merge
// https://www.tutorialkart.com/algorithms/merge-sort-algorithm/
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  const mid = Math.ceil(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  // console.log(mid);
  // console.log(`OUTER-LEFT : ${left}`);
  // console.log(`OUTER-RIGHT : ${right}`);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  // console.log(`LEFT : ${left}`);
  // console.log(`RIGHT : ${right}`);

  let leftIdx = 0;
  let rightIdx = 0;

  while (true) {
    // no more on left : push the rest of right into merge
    if (leftIdx === left.length) {
      // console.log(right.slice(rightIdx));
      result.push(...right.slice(rightIdx));
      break;
    }
    // no more on right : push the rest of left into merge
    else if (rightIdx === right.length) {
      // console.log(left.slice(leftIdx));
      result.push(...left.slice(leftIdx));
      break;
    } else {
      // push the smaller number into merge
      if (left[leftIdx] < right[rightIdx]) {
        result.push(left[leftIdx]);
        leftIdx++;
      } else {
        result.push(right[rightIdx]);
        rightIdx++;
      }
    }
  }

  console.log(`MERGE : ${result.flat()}`);
  return result.flat();
}

console.log(numbers);
const answer = mergeSort(numbers);
console.log(answer);

// --------------------------------------------------
// The following is solution code
// --------------------------------------------------
// function mergeSort(array) {
//   if (array.length === 1) {
//     return array;
//   }

//   // Split Array in into right and left
//   const length = array.length;
//   const middle = Math.floor(length / 2);
//   const left = array.slice(0, middle);
//   const right = array.slice(middle);

//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   const result = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       result.push(left[leftIndex]);
//       leftIndex++;
//     } else {
//       result.push(right[rightIndex]);
//       rightIndex++;
//     }
//   }

//   return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }
