import { describe, it, expect } from 'vitest';
import { sumNumbers } from './utilsService';

describe(
  'sumNumbers',
  () => {
    it(
      'returns sum of numbers successfully',
      () => {
        // Sum is 55
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const result = sumNumbers(numbers);
        
        expect(result).toBe(55);
      }
    );

    it(
      'returns null when invalid parameter',
      () => {
        // Sum is 55
        const numbers = 'hellostring';
        const result = sumNumbers(numbers);
        
        expect(result).toBe(null);
      }
    );

    it(
      'returns 0 when array is empty',
      () => {
        // Sum is 0
        const numbers = [];
        const result = sumNumbers(numbers);
        
        expect(result).toBe(0);
      }
    );
  }
);