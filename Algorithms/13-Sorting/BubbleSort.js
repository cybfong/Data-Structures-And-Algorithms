// An exercise to implement bubble sort logic
// Never use in practice, only for educational purpose

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];

// Swap item if it is larger with neighbor, each time from start
// This approach stops all compare immediately if the array is sorted
function bubbleSort(array) {
  // console.log(array);
  while (true) {
    // a variable to determine if there are any swap happened
    let swap = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        const tmp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = tmp;
        swap = 1;
      }
    }
    console.log(numbers);
    if (swap === 0) {
      break;
    }
  }
  return array;
}

console.log(bubbleSort(numbers));

// --------------------------------------------------
// The following is solution code
// --------------------------------------------------
// function bubbleSort(array) {
//   const length = array.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length; j++) {
//       if (array[j] > array[j + 1]) {
//         //Swap the numbers
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//     console.log(array);
//   }
// }
