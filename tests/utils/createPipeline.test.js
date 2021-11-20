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

  it('should reject and throw nonexistentOutput.txt', async () => {
    // let rl = require("readline").createInterface({
    //   input: process.stdin,
    //   output: process.stdout
    // });
    // await expect (createPipeline({conf: ['C1', 'C0']})).resolves.toBeDefined();
    // console.log('!!!!')
    // process.emit('SIGINT');
    // process.stdin.write('text');
    // process.stdout.on('data', () => {
    //   expect(data.toString().toMatch('text'));
    // })
    // rl.close();
    // process.emit('SIGINT');
    // process.on('SIGINT', () => {
    //   process.exit(1)
    // })
    // process.stdin.end();
    // process.stdout.end()
  })
})