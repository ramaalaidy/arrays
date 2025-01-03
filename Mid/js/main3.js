let array = [1, 2, 3, 4, 5, 6];

let start = 2;
let end = 4;

let extractedArray = [];

for (let i = 0; i < array.length; i++) {
  if (i < start || i > end) {
    extractedArray.push(array[i]);
  }
}

console.log(extractedArray);
