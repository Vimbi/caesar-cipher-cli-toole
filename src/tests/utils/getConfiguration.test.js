const getConfiguration = require('../../utils/getConfiguration');

describe('getConfiguration', () => {

  it('should be', () => {
    expect(getConfiguration(['-c', 1])).toBeTruthy();
  });
})
