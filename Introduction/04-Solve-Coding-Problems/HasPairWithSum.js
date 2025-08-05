// Google Interview Exercise
// URL: https://www.youtube.com/watch?v=XKu_SEDAykw

// Naive approach
function hasPairWithSum(arr, sum) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }

  return false;
}

// Better approach
function hasPairWithSum2(arr, sum) {
  const mySet = new Set(); // stores the complement : sum - array element
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      // check if any array item looking for this complement
      return true;
    }
    mySet.add(sum - arr[i]);
    console.log(mySet);
  }
  return false;
}

// console.log(hasPairWithSum([6, 4, 3, 2, 1, 7], 9));
console.log(hasPairWithSum2([6, 4, 3, 2, 1, 7], 9));
