function getFunc(num1) {
  return function sum(num2) {
    return num1 + num2;
  }
}
console.log(getFunc(5)(4));