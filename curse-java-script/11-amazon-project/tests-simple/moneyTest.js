import { formatCurrenty } from '../scripts/utils/money.js';

// Automated Tests

console.log('test suite: formatCurrency');

console.log('converts cents into dollars');
if (formatCurrenty(2095) == '20.95') {
  console.log('passed');
} else { 
  console.log('failed');
}

console.log('works with 0');
if (formatCurrenty(0) == '0.00') {
  console.log('passed');
} else { 
  console.log('failed');
}

console.log('rounds up to the nearest cent');
if (formatCurrenty(2000.5) == '20.01') {
  console.log('passed');
} else { 
  console.log('failed');
}

