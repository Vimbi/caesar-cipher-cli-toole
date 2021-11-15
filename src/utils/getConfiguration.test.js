const getConfiguration = require('./getConfiguration');

describe('getConfiguration', () => {

  it('should be', () => {
    expect(getConfiguration(['-c', 1])).toBeTruthy();
  });
})
