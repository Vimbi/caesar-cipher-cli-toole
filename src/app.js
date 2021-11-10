const process = require('process');
const checkFile = require('./checks/checkFile');
const { pipeline } = require('stream');
const getConfiguration = require('./utils/getConfiguration');
const checkMissOrDuplicated = require('./checks/checkMissOrDuplicated');
const checkConfig = require('./checks/checkConfig');
const { ValidationError, ReadError } = require('./errors/customErrors');
const MyReadable = require('./streams/fileReadable');
const MyWritable = require('./streams/fileWritable');
const selectTransform = require('./utils/selectTransform');

const fs = require('fs');
const { checkFileAccessError } = require('./errors/customErrors');
const errors = require('./errors/errorsText');

const App = () => {

  const configuration = getConfiguration(process.argv.slice(2));

  const { '-c': c, '--config': config, '-i': i, '--input': input, '-o': o, '--output': output } = configuration;

  try {
    checkMissOrDuplicated(c, config, i, input, o, output);
  } catch (err) {
    if (err instanceof ValidationError) {
      throw new ReadError('Ошибка валидации', err);
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
    checkConfig(data.conf);
  } catch (err) {
    if (err instanceof ValidationError) {
      throw new ReadError('Ошибка валидации', err);
    } else {
      throw err;
    }
  }

  checkFile(data.input);
  checkFile(data.output);

  const readable = data.input ? new MyReadable(data.input) : process.stdin;
  const transform = data.conf.map(element => selectTransform(element));
  const writable = data.output ? new MyWritable(data.output) : process.stdout;

  pipeline(
    readable,
    ...transform,
    writable,
    (err) => {
      if (err) {
        console.error("\x1b[31m", 'Pipeline failed.', err);
        process.exit(1);
      } else {
        console.log("\x1b[32m", 'Pipeline succeeded.');
      }
    }
  );
}

module.exports = App;