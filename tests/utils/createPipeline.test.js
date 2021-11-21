const { createPipeline } = require('../../src/utils');
const { spawn } = require('child_process');
const process = require('process');

describe('createPipeline', () => {

  it('should to be', async () => {
    await expect(createPipeline({conf: ['C1','C0','A'], input: 'input.txt', output: 'output.txt'})).resolves.toBe();
  })

  it('should reject and throw nonexistentFile.txt', async () => {
    await expect(createPipeline({conf: ['A'], input: 'nonexistentInput.txt', output: 'output.txt'})).rejects.toBe('nonexistentInput.txt');
  })

  it('should reject and throw nonexistentOutput.txt', async () => {
    await expect(createPipeline({conf: ['A'], input: 'input.txt', output: 'nonexistentOutput.txt'})).rejects.toBe('nonexistentOutput.txt');
  })
})