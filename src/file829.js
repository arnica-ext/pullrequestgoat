import {addTwoNumbes} from './utils.js';

const number = Math.random() * 1000;

function fib(number) {
    
    let n1 = 0, n2 = 1, nextTerm;

    console.log('Fibonacci Series:');
    console.log(n1); // print 0
    console.log(n2); // print 1

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

if (process.env.POISON_PILL) {
  console.log("this can't be found without either static analysis or a code review, running all files won't trigger this");
}
