const { verifyBookNumber } = require('../src/ISBN.js');

describe('Book Number Validator', () => {
  it('Validates correct ISBN-13 numbers', () => {
    let result = verifyBookNumber('9780316066525');
    expect(result).toBe('Valid');
  });

  it('Invalidates incorrect ISBN-13 numbers', () => {
    let result = verifyBookNumber('9780316066225');
    expect(result).toBe('Invalid');
  });

  it('Validates correct ISBN-10 and outputs valid ISBN-13 number', () => {
    let result = verifyBookNumber('0550630600');
    expect(typeof result).toBe('string');
    expect(verifyBookNumber(result)).toBe('Valid');
  });

  it('Invalidates incorrect ISBN-10', () => {
    let result = verifyBookNumber('0330301824');
    expect(result).toBe('Invalid');
  });
});
