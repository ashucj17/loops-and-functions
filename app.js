// //__________Loops_____________//
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) console.log("even number:", i);
//   else {
//     console.log("odd number", i);
//   }
// }
//________normal function____________//
function hello() {
  console.log("hello everyone");
}
hello(); //________function call______//

//_______________Arrorw function_________________//
let sum = (a, b) => a + b;
console.log(sum(5, 7));

let num = (a) => a * a;
{
  console.log(num(21));
}

let mod = (a, b) => a / b;
console.log(mod(3, 4));

let sub = (a, b) => a - b;
console.log(sub(21, 13));
