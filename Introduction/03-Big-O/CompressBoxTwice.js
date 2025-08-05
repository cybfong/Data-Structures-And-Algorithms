function compressBoxesTwices(boxes, boxes2) {
  boxes.forEach(function (boxes) {
    console.log(boxes);
  });

  boxes2.forEach(function (boxes) {
    console.log(boxes);
  });
}

// O(n + m) = steps in order
// O(n * m) = nested steps
// Big O rule 3 : Different terms for inputs
