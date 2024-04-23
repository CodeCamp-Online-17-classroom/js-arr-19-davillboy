// write code here

function checkEmptyObj(obj) {

  if (typeof obj !== "object" || obj === null) {
    return false; 
  }

  for (let key in obj) {
    return false;
  }

  return true;
}

console.log(checkEmptyObj({})); // true
console.log(checkEmptyObj({ name: "John", age: 30 })); // false
console.log(checkEmptyObj(null)); // false
console.log(checkEmptyObj([])); // false
console.log(checkEmptyObj(123)); // false
