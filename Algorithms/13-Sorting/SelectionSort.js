// An exercise to implement selection sort logic
// Never use in practice, only for educational purpose

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// Swap item at i with smallest item in the array
function selectionSort(array) {
  // console.log(array);
  for (let i = 0; i < array.length; i++) {
    let smallestPosition = i;
    // Find smallest item from current position i onwards
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallestPosition]) {
        smallestPosition = j;
      }
    }
    // console.log(smallestPosition);
    // Swap current value at i with the value at smallest position
    if (smallestPosition !== i) {
      let tmp = array[i];
      array[i] = array[smallestPosition];
      array[smallestPosition] = tmp;
      // console.log("swapped");
    }
    // console.log(array);
  }
  return array;
}

console.log(selectionSort(numbers));

// --------------------------------------------------
// The following is solution code
// --------------------------------------------------
// function selectionSort(array) {
//   const length = array.length;

//   for (let i = 0; i < length - 1; i++) {
//     // Set current index as minimum
//     let min = i;
//     let temp = array[i];

//     for (let j = i + 1; j < length; j++) {
//       if (array[j] < array[min]) {
//         // Update minimum if current is lower that what we had previously
//         min = j;
//       }
//     }

//     array[i] = array[min];
//     array[min] = temp;
//   }

//   return array;
// }
