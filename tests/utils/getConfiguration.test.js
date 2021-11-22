const getConfiguration = require('../../src/utils/getConfiguration');

describe('getConfiguration', () => {

  it('should be', () => {
    expect(getConfiguration).toBeDefined();
  });

  it('should return {"-c": 1, "-i": "input.txt", "-o": "output.txt",}', () => {
    expect(getConfiguration(['-c', 1, '-i', 'input.txt', '-o', 'output.txt']))
      .toEqual({"-c": 1, "-i": "input.txt", "-o": "output.txt",});
  });

  it('should return {"-c": ["1", "2"]}', () => {
    expect(getConfiguration(['-c', '1', '-c', '2'])).toEqual({"-c": ["1", "2"]});
  });

  it('should throw error', () => {
    expect(() => {getConfiguration()}).toThrow();
  });
})
