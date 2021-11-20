const process = require('process');
const { getConfiguration, createPipeline } = require('./utils');
const { checkMissOrDuplicated, checkConfig } = require('./checks');
const { ValidationError, ReadError, FileAccessError } = require('./errors/customErrors');

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
    await createPipeline(data).catch(err => {
      throw new FileAccessError(err);
    });
  } catch (err) {
    if (err instanceof FileAccessError) {
      throw new ReadError('Access error', err);
    } else {
      throw err;
    }
  }
}

module.exports = App;