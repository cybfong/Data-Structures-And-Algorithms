//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// function firstRecurringCharacter(input)
// }

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

const firstRecurringCharacter = (input) => {
  // console.log(input);
  const map = new Map();
  // O(n) : setup map
  for (let i = 0; i < input.length; i++) {
    if (!map.has(input[i])) {
      map.set(input[i], 1);
    } else {
      map.set(input[i], map.get(input[i]) + 1);
      // break loop once recurring character is found
      return input[i];
    }
  }
  console.log(map);
  return undefined;
};

const firstRecurringCharacter2 = (input) => {
  // console.log(input);
  const hashTable = {};
  // O(n) : setup map
  for (let i = 0; i < input.length; i++) {
    // if (!hashTable.hasOwnProperty(input[i])) {
    if (!hashTable[input[i]]) {
      hashTable[input[i]] = 1;
    } else {
      hashTable[input[i]] = hashTable[input[i]] + 1;
      // break loop once recurring character is found
      return input[i];
    }
  }
  console.log(hashTable);
  return undefined;
};

// console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurringCharacter([2, 3, 4, 5]));
// console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));

console.log(firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter2([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter2([2, 3, 4, 5]));
console.log(firstRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 4]));

// --------------------------------------------------
// The following is solution code
// --------------------------------------------------
// function firstRecurringCharacter(input) {
//   for (let i = 0; i < input.length; i++) {
//     for (let j = i + 1; j < input.length; j++) {
//       if(input[i] === input[j]) {
//         return input[i];
//       }
//     }
//   }
//   return undefined
// }

// function firstRecurringCharacter2(input) {
//   let map = {};
//   for (let i = 0; i < input.length; i++) {
//     if (map[input[i]] !== undefined) {
//       return input[i]
//     } else {
//       map[input[i]] = i;
//     }
//   }
//   return undefined
// }
