const process = require('process');
const errors = require('./constants');

const paramsPatterns = ['C0', 'C1', 'R0', 'R1', 'A'];

const checkConfig = (conf) => {
  if (!conf.every(element => paramsPatterns.includes(element))) {
    console.error("\x1b[31m", errors.configNotValid);
    process.exit(1);
  }
}

module.exports = checkConfig;