const { pipeline } = require('stream/promises');
const { MyReadableStream, MyWritableStream } = require('../streams');
const selectTransform = require('./selectTransform');

const createPipeline = async (data) => {
  await pipeline(
    data.input ? new MyReadableStream(data.input) : process.stdin,
    ...data.conf.map(element => selectTransform(element)),
    data.output ? new MyWritableStream(data.output) : process.stdout,
  );
};

module.exports = createPipeline;
