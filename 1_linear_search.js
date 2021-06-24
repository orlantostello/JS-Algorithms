const array = [1, 4, 7, 5, 8, 1, 3, 2, 7, 5, 13];

let count = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i += 1) {
    count += 1;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(array, 8));
console.log("count = ", count);
