/**
 * calculator.js - Node.js CLI Calculator
 *
 * Supports the four basic arithmetic operations:
 *   - Addition (+)
 *   - Subtraction (-)
 *   - Multiplication (×)
 *   - Division (÷)
 */

'use strict';

const readline = require('readline');

/**
 * Adds two numbers together.
 * @param {number} a
 * @param {number} b
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts b from a.
 * @param {number} a
 * @param {number} b
 * @returns {number} The difference of a and b.
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number} The product of a and b.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides a by b. Throws an error if b is zero.
 * @param {number} a
 * @param {number} b
 * @returns {number} The quotient of a divided by b.
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

/**
 * Evaluates a simple expression of the form: <number> <operator> <number>
 * Supported operators: +, -, *, /
 * @param {string} expression
 * @returns {number} The result of the expression.
 */
function evaluate(expression) {
  const match = expression.trim().match(/^(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)$/);
  if (!match) {
    throw new Error(`Invalid expression: "${expression}". Expected format: <number> <+|-|*|/> <number>`);
  }

  const a = parseFloat(match[1]);
  const operator = match[2];
  const b = parseFloat(match[3]);

  switch (operator) {
    case '+': return add(a, b);
    case '-': return subtract(a, b);
    case '*': return multiply(a, b);
    case '/': return divide(a, b);
  }
}

// CLI entry point
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length > 0) {
    // Non-interactive mode: evaluate expression passed as argument
    const expression = args.join(' ');
    try {
      const result = evaluate(expression);
      console.log(`${expression} = ${result}`);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
  } else {
    // Interactive mode
    console.log('Node.js CLI Calculator');
    console.log('Supported operations: + (addition), - (subtraction), * (multiplication), / (division)');
    console.log('Usage: <number> <operator> <number>  (e.g. 5 + 3)');
    console.log('Type "exit" or press Ctrl+C to quit.\n');

    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.setPrompt('> ');
    rl.prompt();

    rl.on('line', (line) => {
      const input = line.trim();
      if (input === 'exit' || input === 'quit') {
        rl.close();
        return;
      }
      if (input) {
        try {
          const result = evaluate(input);
          console.log(`= ${result}`);
        } catch (err) {
          console.error(`Error: ${err.message}`);
        }
      }
      rl.prompt();
    });

    rl.on('close', () => {
      console.log('Goodbye!');
      process.exit(0);
    });
  }
}

module.exports = { add, subtract, multiply, divide };
