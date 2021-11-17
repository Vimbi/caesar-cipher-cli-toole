const { checkMissOrDuplicated } = require('../../src/checks/index');
const { PropertyRequiredError, PropertyDuplicatedError } = require('../../src/errors/customErrors');

describe('checkMissOrDuplicated', () => {

  it('should throw PropertyDuplicatedError with double config', () => {
    expect(() => {checkMissOrDuplicated(c = ['A', 'R1'])}).toThrow(PropertyDuplicatedError);
  });

  it('should throw PropertyRequiredError', () => {
    expect(() => {checkMissOrDuplicated()}).toThrow(PropertyRequiredError);
  });

  it('should be undefined', () => {
    expect(checkMissOrDuplicated(c = 'A')).toBeUndefined();
  });

  it('should throw PropertyDuplicatedError with double input file', () => {
    expect(() => {checkMissOrDuplicated(с = 'R1', config = undefined, i = ['input.txt', 'somefile.txt'])}).toThrow(PropertyDuplicatedError);
  });

  it('should throw PropertyDuplicatedError with double output file', () => {
    expect(() => {checkMissOrDuplicated(с = 'R1', config = undefined, i = 'input.txt', input = undefined, o = ['output.txt', 'somefile.txt'])}).toThrow(PropertyDuplicatedError);
  });
})