/* 
2626. Given an integer array nums, 
a reducer function fn, and an initial value init, 
return a reduced array.
*/

type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
  if (!nums || nums.length === 0) return init;

  let accumulator = fn(init, nums.shift()!);

  for (const num of nums) {
    accumulator = fn(accumulator, num);
  }

  return accumulator;
}
