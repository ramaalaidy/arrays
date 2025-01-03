let array = [1, 2, 3, 4, 5];

let index = -1;  

for (let i = 0; i < array.length; i++) {
  if (array[i] === 3) {
    index = i;  
    break;  
  }
}

let output = array.join(",");
console.log(" " + output);
