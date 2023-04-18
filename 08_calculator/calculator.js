const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(addends) {
  let sum = 0;
	for (addend of addends) {
    sum += addend;
  }
  return sum;
};

const multiply = function(factors) {
  let mult = 1;
	for (factor of factors) {
    mult *= factor;
  }
  return mult;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	let fact = 1;
  if (a >= 1) {
    for (let i = 1; i <= a; i++) {
      fact *= i;
    }
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
