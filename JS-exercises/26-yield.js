console.log("Use of the yield keyword")

// ---------------------------------------------------------------------
function* foo(index) {
    while (index < 2) {
      yield index;
      index++;
    }
  }

  const iterator = foo(0); // inicjuje iterator i przekazuje startową wartość

  console.log(iterator.next().value); // ponieważ yield jest przed inc, zwracana jest wart 0
  // expected output: 0

  console.log(iterator.next().value);
  // expected output: 1

// ---------------------------------------------------------------------


