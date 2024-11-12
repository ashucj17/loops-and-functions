//  there are tow types of scope in javascript: 1: global scope , 2: local scope

// global scope
// let userName; /* global variable */
// userName = "Ashu";
// console.log(userName);

// local vatiable

// function imp() {
//   let js = "javascript"; /* local variable */
//   console.log(js);
// }
// imp();

// let a = 10;
// const b = 20;
// var c = 30;
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  let userName = "aeni";

  function two() {
    let hobby = "shopping";
    console.log(userName + " " + hobby);
  }
  two();
  console.log(userName);
}
one();
