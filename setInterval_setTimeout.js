//  setInterval function will executed within the fraction of given time
let intervalOut = setInterval(function () {
  console.log(`this function is executed at given interval`), 1000;
});

setTimeout(function () {
  clearInterval(intervalOut);
  console.log("interval stoped");
}, 1000);
// SetTimeOut function execute the cid after a specified delay
// setTimeout(function () {
//   console.log(`this function will execute after  seconds`), 5000;
// });
