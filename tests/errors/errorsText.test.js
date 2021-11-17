const errors = require('../../src/errors/errorsText');

describe('Errors texts object', () => {

  test('to be defined', () => {
    expect(errors).toBeDefined();
  });

  it('should contain paramRequired and to be \'is required\'', () => {
    expect(errors.paramRequired).toBe('is required');
  });
});