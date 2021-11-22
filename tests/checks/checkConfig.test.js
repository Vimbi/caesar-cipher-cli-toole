const { checkConfig } = require('../../src/checks');

describe('checkConfig', () => {
  it('to be defined', () => {
    expect(checkConfig).toBeDefined();
  });

  it('should throw \'Config is not valid A1\'', () => {
    expect(() => {checkConfig(['A1'])}).toThrow('Config is not valid A1');
  });

  it('not throw error', () => {
    expect(() => {checkConfig['A']}).not.toThrow();
  });
})