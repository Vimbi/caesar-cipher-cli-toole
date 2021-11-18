const { pipeline } = require('stream/promises');
const { MyReadableStream, MyWritableStream } = require('../streams');
const selectTransform = require('./selectTransform');

const main = async (data) => {
  await pipeline(
    data.input ? new MyReadableStream(data.input) : process.stdin,
    ...data.conf.map(element => selectTransform(element)),
    data.output ? new MyWritableStream(data.output) : process.stdout,
  );
  console.log("\x1b[32m%s\x1b[0m", 'Pipeline succeeded.');
};

module.exports = main;
