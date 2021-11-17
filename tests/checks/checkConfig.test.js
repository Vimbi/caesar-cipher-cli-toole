const { checkConfig } = require('../../src/checks');

describe('checkConfig', () => {
  it('should throw \'Config is not valid A1\'', () => {
    expect(() => {checkConfig(['A1'])}).toThrow('Config is not valid A1');
  });
})