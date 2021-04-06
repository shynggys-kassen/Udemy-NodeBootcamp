// let avg = (...n) => {
//   let total = 0;
//   for (let i = 0; i < n.length; i++) {
//     total += n[i];
//   }
//   return total / n.length;
// };

// var spice = (fn, ...n) => {
//   return function (...m) {
//     return fn.apply(null, n.concat(m));
//   };
// };

// let getAverge = spice(avg, 1, 2, 3);
// console.log(getAverge(1, 2, 3));

// const fnc = (a, b, c) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b + c);
//     }, 2000);
//   });
// };

// const somefun = (fn) => async (a, b, c) => {
//   let s = await fn(a, b, c);
//   console.log(s);
// };

// // somefun(fnc)(1, 1, 1).then((asd) => console.log(asd));
// async function stupid() {
//   await console.log(somefun(fnc)(1, 2, 3));
// }

// stupid();
// This is a normal function which returns a promise
// which resolves to "MESSAGE" after 2 seconds.
// function getMessage() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("MESSAGE"), 2000);
//   });
// }

// async function start() {
//   const message = await getMessage();
//   return `The message is: ${message}`;
// }

// start().then((msg) => console.log(msg));
// // "the message is: MESSAGE"

// const p1 = Promise.resolve("interesting");
// p1.then((value) => console.log(value));

const returnerror = () => {
  throw new Error("Shynggys wants error");
};

const somefunction = (fn) => {
  Promise.resolve(fn()).catch((message) => {
    console.log("error has happened");
  });
};

somefunction(returnerror);
