// Quick sort implementation exercise
// Better than Merge Sort, which use less space (memory sort), most popular. Down side is the worst case come from the pivot value.

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// O(n log n) : A divide and conquer paradigm, use pivot to partition the array with numbers <= pivot to the left of the pivot, else to the right of the pivot
// https://www.tutorialkart.com/algorithms/quick-sort-algorithm/
function quickSort(array, left, right) {
  // Process only if there is a valid range : left index < right index
  if (left < right) {
    // assign rightmost item as the pivot
    let pivot = right;

    console.log(
      `INPUT ->> array=[${array.flat()}], pivot=[${pivot}], left=[${left}], right=[${right}]`
    );
    let partitionIdx = getPartitionIdx(array, pivot, left, right);
    console.log(
      `INPUT ->> array=[${array.flat()}], pivot=[${pivot}], left=[${left}], right=[${right}], partitionIdx=[${partitionIdx}]`
    );
    console.log("----------");

    quickSort(array, left, partitionIdx - 1);
    quickSort(array, partitionIdx + 1, right);
  } else {
    console.log(
      `No sorting performed : Left index [${left}] is >= Right index [${right}]`
    );
  }
  return array;
}

function getPartitionIdx(array, pivot, left, right) {
  // Until left and right index in same position
  while (true) {
    // console.log(`Comparing : ${array[left]} vs [${array[pivot]}]`);
    if (array[left] > array[pivot]) {
      // 1. preserve value on left of pivot and left value
      let leftValue = array[left];
      let pivotLeftValue = array[pivot - 1];
      // console.log(leftValue, pivotLeftValue);

      // 2. Copy pivot value to its left
      array[pivot - 1] = array[pivot];
      // console.log(array[pivot - 1]);

      // 3. Replace pivot with preversed left value
      array[pivot] = leftValue;
      // console.log(array[pivot]);

      // 4. Replace left value with preserved pivot left value (** ONLY IF (pivot - 1) index !== left index, or else left value will be overritten by itself because it is already assigned to the pivot position)
      if (pivot - 1 !== left) array[left] = pivotLeftValue;
      // console.log(array[left]);
      // console.log(array, left, right, pivot);

      right--;
      pivot--;
    } else {
      left++;
    }

    if (left === right) {
      // console.log(array, left, right, pivot);
      break;
    }
  }
  return pivot;
}

console.log(numbers);
// Select first and last index as 2nd and 3rd parameters to start
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);

// getPartitionId debug
// const test = [0, 1, 2, 4, 6, 5, 63, 87, 44, 99, 283];
// let idx = getPartitionIdx(test, 8, 4, 8);
// let idx = getPartitionIdx(numbers, 10, 0, 10);
// console.log(test, idx);

// --------------------------------------------------
// The following is solution code
// --------------------------------------------------
// function quickSort(array, left, right) {
//   const len = array.length;
//   let pivot;
//   let partitionIndex;

//   if (left < right) {
//     pivot = right;
//     partitionIndex = partition(array, pivot, left, right);

//     //sort left and right
//     quickSort(array, left, partitionIndex - 1);
//     quickSort(array, partitionIndex + 1, right);
//   }
//   return array;
// }

// function partition(array, pivot, left, right) {
//   let pivotValue = array[pivot];
//   let partitionIndex = left;

//   for (let i = left; i < right; i++) {
//     if (array[i] < pivotValue) {
//       swap(array, i, partitionIndex);
//       partitionIndex++;
//     }
//   }
//   swap(array, right, partitionIndex);
//   return partitionIndex;
// }

// function swap(array, firstIndex, secondIndex) {
//   var temp = array[firstIndex];
//   array[firstIndex] = array[secondIndex];
//   array[secondIndex] = temp;
// }
