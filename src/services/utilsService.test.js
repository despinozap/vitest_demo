import { describe, it, expect } from 'vitest';
import { sumNumbers } from './utilsService';

describe(
  'Utils service',
  () => {
    it(
      'sumNumbers sums numbers successfully',
      () => {
        // Sum is 55
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const result = sumNumbers(numbers);
        
        expect(result).toBe(55);
      }
    );

    it(
      'sumNumbers returns null when invalid parameter',
      () => {
        // Sum is 55
        const numbers = 'hellostring';
        const result = sumNumbers(numbers);
        
        expect(result).toBe(null);
      }
    );
  }
);