'use strict';

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// // createBooking('LH123', 2);
// // createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000); // skip default value for numPassengers


const flight = 'LH234'; // value / primitive type
const jonas = { // object / reference type
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;


// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// }
// newPassport(jonas);
// checkIn(flight, jonas);


// passing by value and passing by reference
// primitive types are passed by value, meaning that a copy of the value is created and passed to the function.
// objects are passed by reference, meaning that a reference to the object is passed to the function, allowing the function to modify the original object.
// JS does not have pass by reference, but it has pass by value for objects, which means that the reference to the object is passed by value.


// 137 First class and higher-order functions

// functions are values in JS, meaning that they can be stored in variables, passed as arguments to other functions, and returned from functions. This is because functions are objects in JS.

// high order functions are functions that receive other functions as arguments, return functions, or both. They are a powerful tool for creating abstractions and building reusable code. Examples of higher-order functions include map, filter, and reduce.


// first class functions are functions that can be treated like any other value in JS. They can be assigned to variables, passed as arguments to other functions, and returned from functions. This is because functions are objects in JS.


// 138. Functions Accepting Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}

// higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time, for example in event listeners and array methods like map, filter, and reduce. A callback function is a function that is passed as an argument to another function and is executed after some kind of event or action has occurred.
const high5 = function () {
  console.log('👋');
}
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

// abstraction
// high order functions are functions that receive other functions as arguments, return functions, or both. They are a powerful tool for creating abstractions and building reusable code. Examples of higher-order functions include map, filter, and reduce.

// Callback functions are functions that are passed as arguments to other functions and are executed after some kind of event or action has occurred. They are a powerful tool for creating abstractions and building reusable code. Examples of callback functions include event listeners and array methods like map, filter, and reduce.
