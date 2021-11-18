const { spawn } = require('child_process');
const { main } = require('../../src/utils');


describe('', () => {

  it('', async () => {

    // expect(main).toBeDefined();
    await expect(main({conf: ['C1','C0','A'], input: 'input.txt', output: 'output.txt'})).resolves.toBe();
    await expect(main({conf: ['A'], input: 'file.txt', output: 'file.txt'})).rejects.toBe('file.txt');
    await expect(main({conf: ['A'], input: 'input.txt', output: 'file.txt'})).rejects.toBe('file.txt');
    // expect().toBe();
    // command.stdout.on('data', (data) => {
    //   console.log(`stdout: ${data}`);
    // })
  })
})