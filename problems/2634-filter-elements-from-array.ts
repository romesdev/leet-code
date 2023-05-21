/* 
2634. Given an integer array arr and a filtering function fn,
return a new array with a fewer or equal number of elements.
*/

function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
  let filtered: number[] = [];

  arr.forEach((element, index) => {
    if (fn(element, index)) {
      filtered.push(element);
    }
  });

  return filtered;
}
