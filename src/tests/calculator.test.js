'use strict';

const { add, subtract, multiply, divide } = require('../calculator');

// ─── Addition ────────────────────────────────────────────────────────────────
describe('add()', () => {
  // Example from image: 2 + 3 = 5
  test('adds two positive integers (2 + 3 = 5)', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds a positive and a negative number (10 + -4 = 6)', () => {
    expect(add(10, -4)).toBe(6);
  });

  test('adds two negative numbers (-5 + -3 = -8)', () => {
    expect(add(-5, -3)).toBe(-8);
  });

  test('adds with zero (0 + 7 = 7)', () => {
    expect(add(0, 7)).toBe(7);
  });

  test('adds floating-point numbers (1.5 + 2.5 = 4)', () => {
    expect(add(1.5, 2.5)).toBe(4);
  });

  test('adding zero to zero returns zero (0 + 0 = 0)', () => {
    expect(add(0, 0)).toBe(0);
  });
});

// ─── Subtraction ─────────────────────────────────────────────────────────────
describe('subtract()', () => {
  // Example from image: 10 - 4 = 6
  test('subtracts two positive integers (10 - 4 = 6)', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts to a negative result (3 - 7 = -4)', () => {
    expect(subtract(3, 7)).toBe(-4);
  });

  test('subtracts a negative number (5 - -3 = 8)', () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test('subtracts zero from a number (9 - 0 = 9)', () => {
    expect(subtract(9, 0)).toBe(9);
  });

  test('subtracts floating-point numbers (5.5 - 2.5 = 3)', () => {
    expect(subtract(5.5, 2.5)).toBe(3);
  });

  test('subtracts a number from itself (8 - 8 = 0)', () => {
    expect(subtract(8, 8)).toBe(0);
  });
});

// ─── Multiplication ──────────────────────────────────────────────────────────
describe('multiply()', () => {
  // Example from image: 45 * 2 = 90
  test('multiplies two positive integers (45 * 2 = 90)', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies a positive and a negative number (3 * -7 = -21)', () => {
    expect(multiply(3, -7)).toBe(-21);
  });

  test('multiplies two negative numbers (-4 * -5 = 20)', () => {
    expect(multiply(-4, -5)).toBe(20);
  });

  test('multiplies by zero returns zero (99 * 0 = 0)', () => {
    expect(multiply(99, 0)).toBe(0);
  });

  test('multiplies by one returns itself (7 * 1 = 7)', () => {
    expect(multiply(7, 1)).toBe(7);
  });

  test('multiplies floating-point numbers (2.5 * 4 = 10)', () => {
    expect(multiply(2.5, 4)).toBe(10);
  });
});

// ─── Division ────────────────────────────────────────────────────────────────
describe('divide()', () => {
  // Example from image: 20 / 5 = 4
  test('divides two positive integers (20 / 5 = 4)', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides with a decimal result (7 / 2 = 3.5)', () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  test('divides a negative number (-12 / 4 = -3)', () => {
    expect(divide(-12, 4)).toBe(-3);
  });

  test('divides two negative numbers (-15 / -3 = 5)', () => {
    expect(divide(-15, -3)).toBe(5);
  });

  test('divides zero by a number returns zero (0 / 9 = 0)', () => {
    expect(divide(0, 9)).toBe(0);
  });

  test('divides a number by one returns itself (42 / 1 = 42)', () => {
    expect(divide(42, 1)).toBe(42);
  });

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed.');
  });

  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero is not allowed.');
  });
});
