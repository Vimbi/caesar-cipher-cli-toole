const getConfiguration = require('../../src/utils/getConfiguration');

describe('getConfiguration', () => {

  it('should be', () => {
    expect(getConfiguration(['-c', 1])).toBeTruthy();
    expect(getConfiguration(['-c', '1', '-c', '2'])).toBeTruthy();
  });
})
