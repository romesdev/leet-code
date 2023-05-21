/* 2648. Write a generator function that returns a generator object
which yields the fibonacci sequence.
*/

function* fibGenerator(): Generator<number, any, number> {
  let a = 0;
  let b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
