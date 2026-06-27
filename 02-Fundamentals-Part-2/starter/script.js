// 35. Function Declarations vs. Expressions

// Function declaration

// A function declaration is a named function that is defined using the function keyword. It can be called before it is defined in the code, due to hoisting.

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);


// Function expression

// A function expression is a function that is defined and assigned to a variable. It cannot be called before it is defined in the code, due to the fact that it is not hoisted.

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);


// personal preference is to use function expressions, as they are more flexible and can be used in a wider variety of situations. Function declarations are more limited in their use, as they can only be used in the global scope or within other functions.


// 36. Arrow Functions

// Arrow functions are a more concise way to write functions in JavaScript. They are defined using the => syntax and do not have their own this keyword, arguments object, or super keyword. They are best suited for non-method functions and cannot be used as constructors.

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
