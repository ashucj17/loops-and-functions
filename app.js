// //__________Loops_____________//
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) console.log("even number:", i);
//   else {
//     console.log("odd number", i);
//   }
// }
// //________normal function____________//
// function hello() {
//   console.log("hello everyone");
// }
// hello(); //________function call______//

// //_______________Arrorw function_________________//
// let sum = (a, b) => a + b;
// console.log(sum(5, 7));

// let num = (a) => a * a;
// {
//   console.log(num(21));
// }

// let mod = (a, b) => a / b;
// console.log(mod(3, 4));

// let sub = (a, b) => a - b;
// console.log(sub(21, 13));

// loop examples

// for (let i = 0; i <= 1000; i++) {
//   console.log("Ashish", i);
// }

// whioe loop
// let i = 10;
// while (i <= 100) {
//   console.log("ashish", i);
//   i++;
// }

// do while

// let i = 20;
// do {
//   console.log("ashish", i);
//   i++;
// } while (i <= 100);

// logical operators

// && and operator
// let age = 18;
// if (age >= 18 && age <= 60) {
//   console.log("Person can drive", age);
// } else {
//   console.log("person cant drive");
// }
// || or operator
// if (age < 18 || age === 17) {
//   console.log("person cannot vote");
// } else {
//   console.log("person can vote");
// }

// ! not operator
// let a = true;
// let b = false;
// console.log(!a);

// ____Function practice___________
// function myFunction(a, b) {
//   return a * b;
// }
// console.log(myFunction(7, 7));/* direct wat or simple way */

// let output = myFunction(8, 8); /* storing the output in an new veriable */
// console.log(output);

// function declaration

// function greatings(name) {
//   console.log(`Hello ${name}`);
// }
// greatings("Ashish");

// function expresstion
/*  creating a function using verables*/
// let sqr = function (a, b) {
//   console.log(a * b);
// };
// sqr(5, 7);

/* another function expression example using back tic and $ symbol */
// let great = function (user) {
//   console.log(`hello ${user}`);
// };
// great("ashu");
//

// let stydy = function () {
//   console.log("JS with chai and code");
// };
// stydy();

// function fear(sub) {
//   console.log(`${sub}, I have to finish in 8 days`);
// }
// fear("JavaScript");

// let userLoggedMsg = function (user = "Ratan") {
// if (user === undefined) {
// console.log("please enter username");
// return;
// }
// return `${user} logged in`;
// };
// console.log(userLoggedMsg("Ashish"));

/*--------------------------------------------------------*/
// function claculatePrices(val1, val2, val3, ...amount) {
/* here (...) represents rest operator, it is used to club all the data in an array */
// return amount;
// }
// console.log(claculatePrices(500, 400, 600, 3000, 100, 90));

/* Passing objects in function */
let user = {
  name: "ashish",
  salary: 750000,
};
function userDetails(basicDetails) {
  console.log(
    `Employee name is ${basicDetails.name} salary is ${basicDetails.salary}`
  );
}
// userDetails(user);
userDetails({ name: "raunak", salary: 80000 });

/*  Array in function */
let myArray = [600, 500, 400, 300, 200, 100];
function getArray(holdArray) {
  return holdArray;
}
console.log(getArray(myArray));
