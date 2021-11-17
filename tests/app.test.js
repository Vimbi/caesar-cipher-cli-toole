const app = require('../src/app');
const { spawn } = require('child_process');
const { ReadError } = require('../src/errors/customErrors');

jest.mock('../src/utils/getConfiguration.js');

const getConfiguration = require('../src/utils/getConfiguration.js');

describe('App', () => {

  it('should', async () => {
    await( app().catch(err => console.log(err)));
    // expect.assertions(1);
    // const aPP = spawn('node', ['index.js', '-c', 'A', '-i', 'input.txt']);
    // app()
    //   .then(() => console.log('!!!'))
    //   .catch(err => console.error(err));
    // try {
    //   await app().then(() => console.log('!!!'));
    //   expect(true).toBeTruthy();
    // } catch (error) {

    // }
    // aPP.stdout.on('data', (data) => {
    //   console.log(`stdout: ${data}`);
    // await expect(app()).resolves.not.toThrow();
    // expect(getConfiguration).toHaveBeenCalledTimes(1);
  //   aPP.stdout.on('end', (data) => {
  //     // This is to remove LF
  //     console.log(`stdout: ${data}`);
  // });

    // expect(app).toBeDefined();
    // expect(getConfiguration).toHaveBeenCalled(1);
    // await expect(async () => { await app() }).toBe();
    // try {
    //   await app();
    // } catch (error) {
    //   expect(error).toMatch('ReadError: Validation error')
    // }
  })
})