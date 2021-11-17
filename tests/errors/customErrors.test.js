const { ValidationError, ReadError, PropertyRequiredError, PropertyDuplicatedError, ConfigPatternError } = require('../../src/errors/customErrors');

describe('ReadError', () => {
  it('should throw ReadError with text Error', () => {
    const errorFunction = () => {
      throw new ReadError('Error');
    };
    expect(errorFunction).toThrow(ReadError);
    expect(errorFunction).toThrow('Error');
  });
})