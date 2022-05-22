import {addTwoNumbes} from './utils.js';

const number = Math.random() * 1000;

function fib(number) {

  let n1 = 0, n2 = 1, nextTerm;

  console.log('Fibonacci Series:');
  console.log(n1); // print 0
  console.log(n2); // print 1

  if (number === 10) {
    // great c at ch
    console.log("b a c k d o o r here... this won't come up often even if you try to run it, as it's pretty random")
  }
  nextTerm = addTwoNumbes(n1, n2);

  while (nextTerm <= number) {

    // print the next term
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = addTwoNumbes(n1, n2);
  }

}

fib(number);

