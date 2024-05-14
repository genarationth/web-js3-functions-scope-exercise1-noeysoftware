function add(a, b) {
  let add = a + b;
  return add;
}

console.log(add(1, 2));

function subtract(a, b) {
  let subtract = a - b;
  return subtract;
}

console.log(subtract(1, 2));

function multiply(a, b) {
  let multiply = a * b;
  return multiply;
}

console.log(multiply(1, 2));

function divide(a, b) {
  let divide = a / b;
  return divide;
}

console.log(divide(1, 2));

function inform(firstName, location, hobby) {
  console.log(
    "Hi, my name is " +
      firstName +
      " I live in " +
      location +
      " and enjoy " +
      hobby
  );
}

inform("the king", "germany", "riding");
