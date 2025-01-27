import { getNthFib, getNthFibIterative } from './nth-fibonacci';

describe('getNthFib', () => {
  test('should return 0 for n = 1', () => {
    expect(getNthFib(1)).toBe(0);
    expect(getNthFibIterative(1)).toBe(0);
  });

  test('should return 1 for n = 2', () => {
    expect(getNthFib(2)).toBe(1);
    expect(getNthFibIterative(2)).toBe(1);
  });

  test('should return 1 for n = 3', () => {
    expect(getNthFib(3)).toBe(1);
    expect(getNthFibIterative(3)).toBe(1);
  });

  test('should return 2 for n = 4', () => {
    expect(getNthFib(4)).toBe(2);
    expect(getNthFibIterative(4)).toBe(2);
  });

  test('should return 3 for n = 5', () => {
    expect(getNthFib(5)).toBe(3);
    expect(getNthFibIterative(5)).toBe(3);
  });

  test('should return 5 for n = 6', () => {
    expect(getNthFib(6)).toBe(5);
    expect(getNthFibIterative(6)).toBe(5);
  });

  test('should return 8 for n = 7', () => {
    expect(getNthFib(7)).toBe(8);
    expect(getNthFibIterative(7)).toBe(8);
  });

  test('should return 13 for n = 8', () => {
    expect(getNthFib(8)).toBe(13);
    expect(getNthFibIterative(8)).toBe(13);
  });

  test('should return 21 for n = 9', () => {
    expect(getNthFib(9)).toBe(21);
    expect(getNthFibIterative(9)).toBe(21);
  });

  test('should return 34 for n = 10', () => {
    expect(getNthFib(10)).toBe(34);
    expect(getNthFibIterative(10)).toBe(34);
  });
});