const getConfiguration = jest
  .fn()
  .mockImplementationOnce(() => {
    return {'-c': 'A', '-i': 'input.txt', '-o': 'output.txt'};
  })
  .mockImplementationOnce(() => {
    return {'-c': ['A','C1'], '-i': 'input.txt', '-o': 'output.txt'};
  })
  .mockImplementationOnce(() => {
    return {'-c': 'A1', '-i': 'input.txt', '-o': 'output.txt'};
  })
  .mockImplementationOnce(() => {
    return {'-c': 'A', '-i': 'notExistingFile.txt', '-o': 'output.txt'};
  })

module.exports = getConfiguration;