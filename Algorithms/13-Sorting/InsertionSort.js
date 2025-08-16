// An exercise to implement insertion sort logic
// Use only when : only a few items and mostly sortrd data

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// const numbers = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];

// Compare with neighbor and insert to correct position
function insertionSort(array) {
  // console.log(array);
  for (let i = 0; i < array.length; i++) {
    // If the current value at i is bigger than it's next
    if (array[i] > array[i + 1]) {
      // console.log(array);
      let tmpIdx = i + 1;
      let tmpValue = array[i + 1];
      // console.log(tmpValue, tmpIdx);
      // Move the value at tmpIdx to the left side, until position at next is larger
      while (true) {
        if (array[tmpIdx - 1] > array[tmpIdx]) {
          array[tmpIdx] = array[tmpIdx - 1];
          array[tmpIdx - 1] = tmpValue;
          tmpIdx--;
          // console.log("Swapping to the left ...", array);
          // console.log(tmpIdx);
        } else {
          break;
        }
      }
      // console.log(array);
    }
  }
  return array;
}

console.log(insertionSort(numbers));

// --------------------------------------------------
// The following is solution code
// --------------------------------------------------
// function insertionSort(array) {
//   const length = array.length;

//   for (let i = 0; i < length; i++) {
//     if (array[i] < array[0]) {
//       // Move number to the first position
//       array.unshift(array.splice(i, 1)[0]);
//     } else {
//       // Find where number should go
//       for (let j = 1; j < i; j++) {
//         if (array[i] > array[j - 1] && array[i] < array[j]) {
//           // Move number to the right spot
//           array.splice(j, 0, array.splice(i, 1)[0]);
//         }
//       }
//     }
//   }

//   return array;
// }
