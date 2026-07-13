'use strict';

// // const bookings = [];

// // const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
// //   const booking = {
// //     flightNum,
// //     numPassengers,
// //     price,
// //   };
// //   console.log(booking);
// //   bookings.push(booking);
// // }

// // createBooking('LH123');
// // createBooking('LH123', 2, 800);
// // // createBooking('LH123', 2);
// // // createBooking('LH123', 5);
// // createBooking('LH123', undefined, 1000); // skip default value for numPassengers


// const flight = 'LH234'; // value / primitive type
// const jonas = { // object / reference type
//   name: 'Jonas Schmedtmann',
//   passport: 24739479284,
// };

// // const checkIn = function (flightNum, passenger) {
// //   flightNum = 'LH999';
// //   passenger.name = 'Mr. ' + passenger.name;

// //   if (passenger.passport === 24739479284) {
// //     alert('Checked in');
// //   } else {
// //     alert('Wrong passport!');
// //   }
// // };

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// // Is the same as doing...
// // const flightNum = flight;
// // const passenger = jonas;


// // const newPassport = function (person) {
// //   person.passport = Math.trunc(Math.random() * 100000000000);
// // }
// // newPassport(jonas);
// // checkIn(flight, jonas);


// // passing by value and passing by reference
// // primitive types are passed by value, meaning that a copy of the value is created and passed to the function.
// // objects are passed by reference, meaning that a reference to the object is passed to the function, allowing the function to modify the original object.
// // JS does not have pass by reference, but it has pass by value for objects, which means that the reference to the object is passed by value.


// // 137 First class and higher-order functions

// // functions are values in JS, meaning that they can be stored in variables, passed as arguments to other functions, and returned from functions. This is because functions are objects in JS.

// // high order functions are functions that receive other functions as arguments, return functions, or both. They are a powerful tool for creating abstractions and building reusable code. Examples of higher-order functions include map, filter, and reduce.


// // first class functions are functions that can be treated like any other value in JS. They can be assigned to variables, passed as arguments to other functions, and returned from functions. This is because functions are objects in JS.


// // 138. Functions Accepting Callback Functions

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// }

// // higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// }

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // JS uses callbacks all the time, for example in event listeners and array methods like map, filter, and reduce. A callback function is a function that is passed as an argument to another function and is executed after some kind of event or action has occurred.
// const high5 = function () {
//   console.log('👋');
// }
// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// // abstraction
// // high order functions are functions that receive other functions as arguments, return functions, or both. They are a powerful tool for creating abstractions and building reusable code. Examples of higher-order functions include map, filter, and reduce.

// // Callback functions are functions that are passed as arguments to other functions and are executed after some kind of event or action has occurred. They are a powerful tool for creating abstractions and building reusable code. Examples of callback functions include event listeners and array methods like map, filter, and reduce.


// //139. Functions Returning Functions

// // closure is a feature in JS that allows a function to access variables from its outer scope even after the outer function has returned. This is because functions in JS are first-class citizens and can be treated like any other value, including being passed as arguments to other functions and returned from functions. This allows for powerful abstractions and reusable code.


// const greet = function (greeting) {
//   console.log('1 outer func greet', greeting);
//   console.log('2 outer func greet', name);

//   return function (name) {
//     console.log('3 inner function name', greeting);
//     console.log('4. inner function name', name);
//     console.log(`${greeting} ${name}`);
//   }
// }

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');


// greet('Hello')('Libby');

// // // arrow function
// const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
// greetArrow('Hi')('Jonas');



// ##########.  140. The call and apply Methods. ##########

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function (flightNum, name) {
//   //   console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//   //   this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   // },
//   book(flightNum, name) {
//     console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// // enhanced object literal syntax allows us to define methods in objects without the function keyword. The book method is defined using the shorthand syntax, which is equivalent to defining it as a function expression.

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);


// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // Does NOT work
// // book(23, 'Sarah Williams');

// // Call method allows us to call a function with a specific this value and arguments provided individually. The first argument is the value of this, and the remaining arguments are the arguments for the function.

// // book(23, 'Sarah Williams'); // this will be undefined because the book function is called without a context
// book.call(eurowings, 23, 'Sarah Williams'); // first argument is the value of this, and the remaining arguments are the arguments for the function
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);


// // Apply method is similar to call method, but it takes an array of arguments instead of individual arguments. The first argument is the value of this, and the second argument is an array of arguments for the function.
// const flightData = [583, 'George Cooper'];
// book.apply(eurowings, flightData);
// console.log(eurowings);

// // The apply method is not used much in modern JS, because we can use the spread operator to pass an array of arguments to a function. The spread operator allows us to expand an array into individual elements, which can be passed as arguments to a function. This is more concise and readable than using the apply method.

// book.call(eurowings, ...flightData);
// console.log(eurowings);


// ##########  141. The bind Method. ##########

// // Bind method allows us to create a new function with a specific this value and arguments provided individually. The first argument is the value of this, and the remaining arguments are the arguments for the function. The bind method does not call the function immediately, but instead returns a new function that can be called later.

// // const eurowings = {
// //   airline: 'Eurowings',
// //   iataCode: 'EW',
// //   bookings: [],
// // };

// // const lufthansa = {
// //   airline: 'Lufthansa',
// //   iataCode: 'LH',
// //   bookings: [],
// //   book(flightNum, name) {
// //     console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
// //     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
// //   },
// // };

// // book.call(eurowings, 23, 'Sarah Williams');
// const bookEW = book.bind(eurowings);

// bookEW(23, 'Steven Williams');

// const bookLH = book.bind(lufthansa);


// const bookEW23 = book.bind(eurowings, 23); // partial application
// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha Cooper');

// // With event listeners
// // the this keyword always points to the element that the event handler is attached to. In this case, the this keyword points to the button element, not the eurowings object. To fix this, we can use the bind method to create a new function with a specific this value.

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// }

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


// Partial application is a technique in functional programming where we create a new function by pre-filling some of the arguments of an existing function. This allows us to create specialized versions of functions that can be reused with different arguments. In this case, we created a new function bookEW23 that pre-fills the flightNum argument with 23, allowing us to call it with just the name argument.


// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23); // partial application, first argument is the "this" keyword
// // (this, rate)
// // addVAT = value => value + value * 0.23;

// console.log(addVAT(100)); // 100 is the value argument, 0.23 is the rate argument
// console.log(addVAT(23));

// Challenge


// const addTax2 = function(rate, value) {
//   return value + value * rate;

//   return function(other) {
//     value + value * rate
//   }
// }

// const tax2 = addTax2(.1, 200)
// console.log('tax 2', tax2);


// const addTaxInside = addTax2(.5, 200)
// const printTax = addTaxInside(1000)

// console.log(printTax);


// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   }
// }

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));


//##########.   142. CHALLENGE #1 ##########

///////////////////////////////////////
// Coding Challenge #1

/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)

  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/



// MINE
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // answer
//     let inputNumber = Number(prompt(
//       `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//     ));

//     // check if number
//     // typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++

//     if (inputNumber > 3) {
//       return alert("try again")
//     } else {
//       // save answer
//       function countFunction(answer, index, arr) {
//         if (index === inputNumber) {
//           arr[index] = answer + 1
//         }
//       }
//       this.answers.forEach(countFunction);
//     }
//   },
//   displayResults(type) {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   }
// };

// document.querySelector('.poll').addEventListener('click', () => {
//   poll.registerNewAnswer()
//   poll.displayResults('array');
//   poll.displayResults('string');
// });




// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // answer
//     let answer = Number(prompt(
//       `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//     ));

//     // check if number
//     typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++

//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   }
// };


// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');



// ########## 143. Immediately Invoked Function Expressions (IIFE) #############


// const runOnce = function () {
//   console.log('wrong This will never run again');
// };
// runOnce();
// runOnce();

// IIFE
// make it a function expression by wrapping it in parentheses, then call it immediately with another set of parentheses.
// This is useful for creating a new scope and avoiding polluting the global scope with variables and functions. It is also useful for creating private variables and functions that cannot be accessed from outside the IIFE.

// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();

// console.log(isPrivate); // ReferenceError: isPrivate is not defined

// (() => console.log('This will ALSO never run again'))();

// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }

// // console.log(isPrivate); // ReferenceError: isPrivate is not defined
// console.log(notPrivate); // 46


// ########## 144. Closures #############

// A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables — a scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.

// A closure is created when a function is defined inside another function, and the inner function references variables from the outer function. The inner function "closes over" the variables from the outer function, allowing it to access them even after the outer function has finished executing.

const secureBooking = function () {
  let passengerCount = 0;

  // returns a new function that has access to the passengerCount variable from the outer function's scope. This is a closure.
  // e.g. booker function has access to the passengerCount variable even after the secureBooking function has finished executing.
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}

const booker = secureBooking();
// booker();
// booker();
// booker();


// We do not need to create closures manually, they are created automatically whenever a function is created. A closure is created when a function is defined inside another function, and the inner function references variables from the outer function. The inner function "closes over" the variables from the outer function, allowing it to access them even after the outer function has finished executing.


console.dir(booker); // shows the closure in the console, which contains the passengerCount variable and its value. The closure is created when the booker function is created, and it has access to the passengerCount variable from the secureBooking function's scope.
