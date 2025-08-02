// An exercise to merge 2 sorted arrays

// O(n)
const mergeSortedArrays = (array1, array2) => {
  let a1Ptr = 0;
  let a2Ptr = 0;
  const result = [];

  // Return if either input is empty
  if (!array1.length) {
    return array2;
  }
  if (!array2.length) {
    return array1;
  }

  // Do while both array pointers are small than th array length
  while (a1Ptr < array1.length && a2Ptr < array2.length) {
    // Perform a compare to push smaller values first
    if (array1[a1Ptr] < array2[a2Ptr]) {
      result.push(array1[a1Ptr]);
      a1Ptr++;
    } else {
      result.push(array2[a2Ptr]);
      a2Ptr++;
    }

    console.log(
      `Array values : array1 = ${array1[a1Ptr]}, array2 = ${array2[a2Ptr]}, mergedArray = ${result}`
    );

    // Push rest of elements to mergedArray when 1 side is done
    // slice the array and push to multiple values (retrive by spread operator) to result
    if (!array1[a1Ptr]) {
      result.push(...array2.slice(a2Ptr));
    }
    if (!array2[a2Ptr]) {
      result.push(...array1.slice(a1Ptr));
    }
  }

  return result;
};

console.log(mergeSortedArrays([0, 3, 4, 31, 55], [4, 6, 30]));

// Can use built-in functions too
// const mergeSortedArrays1 = (array1, array2) => {
//   const result = array1.concat(array2);

//   // sort the array in ascending order
//   return result.sort((a, b) => a - b);
// };
// console.log(mergeSortedArrays1([0, 3, 4, 31, 55], [4, 6, 30]));
