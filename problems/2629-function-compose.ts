/*
2629. Given an array of functions [f1, f2, f3, ..., fn],
return a new function fn that is the function composition
of the array of functions.
*/

type F = (x: number) => number;

const compose = (functions: F[]): F => {
  return (x: number) => functions.reduceRight((acc, f) => f(acc), x);
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
