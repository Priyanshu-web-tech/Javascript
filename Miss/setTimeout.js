// console.log("1");

// setTimeout(function () {
//   console.log("2");
// }, 100);

// setTimeout(function () {
//   console.log("3");
// }, 1000);

// console.log("4");

// function x() {
//   for (var i = 1; i <=5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i*1000);
//   }
// }

// x();

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// x();

function x() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
}

x();
