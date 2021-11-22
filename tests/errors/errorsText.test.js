const errors = require('../../src/errors/errorsText');

describe('Errors texts object', () => {

  test('to be defined', () => {
    expect(errors).toBeDefined();
  });

  it('should contain paramRequired and to be \'is required\'', () => {
    expect(errors.paramRequired).toBe('is required');
  });

  it('should contain paramDuplicated and to be \'must not be duplicated\'', () => {
    expect(errors.paramDuplicated).toBe('must not be duplicated');
  });

  it('should contain noAccess and to be \'cannot be accessed\'', () => {
    expect(errors.noAccess).toBe('cannot be accessed');
  });

  it('should contain configNotValid and to be \'Config is not valid\'', () => {
    expect(errors.configNotValid).toBe('Config is not valid');
  });

  it('should contain pipelineFail and to be \'Pipeline failed.\'', () => {
    expect(errors.pipelineFail).toBe('Pipeline failed.');
  });
});