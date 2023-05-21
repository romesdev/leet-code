/*
2637. Given an asyncronous function fn
and a time t in milliseconds, return a new time
limited version of the input function.
*/

type ReturnFn = (...params: any[]) => Promise<any>;

function timeLimit(fn: ReturnFn, t: number): ReturnFn {
  return async function (...args) {
    const timeout = new Promise((resolve, reject) => {
      setTimeout(reject, t, "Time Limit Exceeded");
    });

    const functionResponse = fn(...args);

    return Promise.race([timeout, functionResponse]);
  };
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

// function timeLimit(fn: Fn, t: number): Fn {
//   return async function (...args) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject("Time Limit Exceeded");
//       }, t);

//       fn(...args)
//         .then(resolve)
//         .catch(reject);
//     });
//   };
// }

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
