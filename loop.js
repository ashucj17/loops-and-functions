/* let obj = {
  name: "master",
  section: "class",
};
for (const key in obj) {
  console.log(key);
}
for (const c of "master") {
  console.log(c);
}

let obj1 = { henry: 90, raj: 84, ankur: 99 };
for (const key in obj) {
  let details = obj1[key];
  console.log(key, details);
}
 */

// for (i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(`even numbers are: ${i}`);
//   }
// }
let index = 0;
let myArray = [5, 7, 96, 3, 6, 4];
while (index <= myArray.length) {
  console.log(myArray[index]);
  index++;
}

let i = 0;
let sum = 0;
while (i <= 50) {
  sum += i;
  console.log(`sum is ${sum}`);
  i++;
}
