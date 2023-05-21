/*
2636. Given an integer array arr 
and a mapping function fn, return a new array
with a transformation applied to each element.
*/

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  arr.forEach((element, index) => {
    arr[index] = fn(element, index);
  });

  return arr;
}
