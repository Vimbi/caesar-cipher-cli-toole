const process = require('process');
const { pipeline } = require('stream/promises');
const getConfiguration = require('./utils/getConfiguration');
const checkMissOrDuplicated = require('./checks/checkMissOrDuplicated');
const checkConfig = require('./checks/checkConfig');
const { ValidationError, ReadError, FileAccessError } = require('./errors/customErrors');
const MyReadable = require('./streams/fileReadable');
const MyWritable = require('./streams/fileWritable');
const selectTransform = require('./utils/selectTransform');

const App = async () => {

  const configuration = getConfiguration(process.argv.slice(2));

  const { '-c': c, '--config': config, '-i': i, '--input': input, '-o': o, '--output': output } = configuration;

  try {
    await checkMissOrDuplicated(c, config, i, input, o, output);
  } catch (err) {
    if (err instanceof ValidationError) {
      throw new ReadError('Validation error', err);
    } else {
      throw err;
    }
  }

  const data = {
    conf: (config || c).split('-'),
    input: input || i,
    output: output || o,
  };

  try {
    await checkConfig(data.conf);
  } catch (err) {
    if (err instanceof ValidationError) {
      throw new ReadError('Validation error', err);
    } else {
      throw err;
    }
  }

  try {
    await pipeline(
      data.input ? new MyReadable(data.input) : process.stdin,
      ...data.conf.map(element => selectTransform(element)),
      data.output ? new MyWritable(data.output) : process.stdout,
    ).catch(err => {
      throw new FileAccessError(err);
    });
    console.log("\x1b[32m", 'Pipeline succeeded.');
  } catch (err) {
    if (err instanceof FileAccessError) {
      throw new ReadError('Access error', err);
    } else {
      throw err;
    }
  }


}

module.exports = App;