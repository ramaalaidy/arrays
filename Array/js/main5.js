let arrayLikeObject = { 0: "a", 1: "b", 2: "c", length: 3 };

let array = Object.values(arrayLikeObject).slice(0, arrayLikeObject.length);

console.log(array);
