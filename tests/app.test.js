// const app = require('../src/app');
// const { spawn } = require('child_process');
// const { ReadError } = require('../src/errors/customErrors');

// // jest.mock('../src/utils/getConfiguration.js');

// // const getConfiguration = require('../src/utils/getConfiguration.js');

// describe('App', () => {
//   // let command;
//   // beforeAll(async () => {
//   //   command = await spawn('node', ['index.js', '-c', 'A', '-i', 'input.txt']);
//   // })

//   it('should', async () => {

//     // command.stdout.on('data', (data) => {

//       // console.log(`stdout: ${data}`);
//     // })
//     let command = await spawn('node', ['index.js', '-c', 'A', '-i', 'input.txt']);

//     await command.stdout.on('end', (data) => {
//       expect(data).toBe('Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!"');
//         // This is to remove LF
//         // console.log(`stdout: ${data}`);
//         done()
//     });

//   })
// })