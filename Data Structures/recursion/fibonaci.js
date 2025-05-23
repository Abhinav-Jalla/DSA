/**
 * 
 * Write a recursive function called fib which accepts a number and returns the nth number in 
 * the Fibonacci sequence. 
 * Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
 *  which starts with 1 and 1, 
 * and where every number thereafter is equal to the sum of the previous two numbers.
 */

function fibonacci(n) {
    if (n <= 2) {
      return n;  // Base case: return n if n is 0 or 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2);  // Recursive case
  }


  console.log(fibonacci(5))