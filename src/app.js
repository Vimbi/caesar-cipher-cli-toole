const process = require('process');
const fs = require('fs');
const Transformer = require('./transform');
const checkFile = require('./checkFile');
const { pipeline } = require('stream');
const getConfiguration = require('./getConfiguration');
const checkMissOrDuplicated = require('./checkMissOrDuplicated');
const checkConfig = require('./checkConfig');

const App = () => {

  const configuration = getConfiguration(process.argv.slice(2));

  const { '-c': c, '--config': config, '-i': i, '--input': input, '-o': o, '--output': output } = configuration;

  checkMissOrDuplicated(c, config, i, input, o, output);

  const data = {
    conf: (config || c).split('-'),
    input: input || i,
    output: output || o,
  };

  checkConfig(data.conf);
  checkFile(data.input);
  checkFile(data.output);

  const readable = data.input ? fs.createReadStream(data.input) : process.stdin;
  const transform = data.conf.map(element => new Transformer(element));
  const writable = data.output ? fs.createWriteStream(data.output, { flags: 'a' }) : process.stdout;

  pipeline(
    readable,
    ...transform,
    writable,
    (err) => {
      if (err) {
        console.error("\x1b[31m", 'Pipeline failed.', err);
      } else {
        console.log("\x1b[32m", 'Pipeline succeeded.');
      }
    }
  );
}

module.exports = App;

