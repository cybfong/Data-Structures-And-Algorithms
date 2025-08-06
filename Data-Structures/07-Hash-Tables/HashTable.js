// An execrise to implement a hash-table

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // private property convention (standard)
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const arrayItem = this._hash(key);
    console.log(`[${key}] Goes into array element of [${arrayItem}]`);
    // this.data.splice(arrayItem, 0, new Array(key, value));
    if (!this.data[arrayItem]) {
      this.data[arrayItem] = [[key, value]];
    } else {
      // handle collisions
      this.data[arrayItem].push([key, value]);
    }
    // this.data[arrayItem] = [];
    // this.data[arrayItem].push([key, value]);
    // console.log(this.data);
  }

  get(key) {
    const arrayItem = this._hash(key);
    // console.log(this.data[arrayItem].length);
    // O(n)
    for (let i = 0; i < this.data[arrayItem].length; i++) {
      // console.log(this.data[arrayItem][i]);
      // console.log(this.data[arrayItem][i][0]);
      if (this.data[arrayItem][i][0] === key) {
        console.log(this.data[arrayItem][i][1]);
        return this.data[arrayItem][i][1];
      }
    }
    console.log(`[${key}] not found !`);
    return undefined;
  }

  keys() {
    const keysArray = [];
    const keysArray2 = [];
    const keysArray3 = [];

    // O (n)
    // Step 1 : collect data
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray3.push(this.data[i]);
      }
    }
    console.log(keysArray3);

    // Step 2 : flatten into 1 array of arrays (JavaScript has array flat function)
    for (let i = 0; i < keysArray3.length; i++) {
      keysArray2.push(...keysArray3[i]);
    }
    console.log(keysArray2);

    // Step 3 : get result, item 0 of each array element
    for (let i = 0; i < keysArray2.length; i++) {
      keysArray.push(keysArray2[i][0]);
    }

    console.log(keysArray);
    return keysArray;
  }
}

const myHashTable = new HashTable(3);
myHashTable.set("grapes", 10000);
// myHashTable.get("grapes");
myHashTable.set("apples", 9);
// myHashTable.get("apples");
myHashTable.set("orange", 2);
// myHashTable.get("orange");
myHashTable.keys();
// console.log(myHashTable);

// --------------------------------------------------
// The following is solution code
// --------------------------------------------------
// class HashTable {
//   constructor(size) {
//     this.data = new Array(size);
//     // this.data = [];
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * i) % this.data.length;
//     }
//     return hash;
//   }

//   set(key, value) {
//     let address = this._hash(key);
//     if (!this.data[address]) {
//       this.data[address] = [];
//     }
//     this.data[address].push([key, value]);
//     return this.data;
//   }

//   get(key) {
//     const address = this._hash(key);
//     const currentBucket = this.data[address];
//     if (currentBucket) {
//       for (let i = 0; i < currentBucket.length; i++) {
//         if (currentBucket[i][0] === key) {
//           return currentBucket[i][1];
//         }
//       }
//     }
//     return undefined;
//   }

//   // Solution from video does not handle collision : try set array size to 2
//   keys() {
//     const keysArray = [];
//     for (let i = 0; i < this.data.length; i++) {
//       // console.log(this.data[i]);
//       if (this.data[i]) {
//         keysArray.push(this.data[i][0][0]);
//       }
//     }
//     return keysArray;
//   }

//   // Solution from the github does handle collision : try set array size to 2
//   // keys() {
//   //   const keysArray = [];
//   //   const flatData = this.data.flat();

//   //   flatData.forEach((entry) => keysArray.push(entry[0]));

//   //   return keysArray;
//   // }

//   // Student provided - include hash collision prevention
//   // keys() {
//   //   if (!this.data.length) {
//   //     return undefined;
//   //   }
//   //   let result = [];
//   //   // loop through all the elements
//   //   for (let i = 0; i < this.data.length; i++) {
//   //     // if it's not an empty memory cell
//   //     if (this.data[i] && this.data[i].length) {
//   //       // but also loop through all the potential collisions
//   //       if (this.data.length > 1) {
//   //         for (let j = 0; j < this.data[i].length; j++) {
//   //           result.push(this.data[i][j][0]);
//   //         }
//   //       } else {
//   //         result.push(this.data[i][0]);
//   //       }
//   //     }
//   //   }
//   //   return result;
//   // }
// }
