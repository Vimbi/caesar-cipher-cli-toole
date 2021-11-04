const process = require('process');
const errors = require('./constants');
const { ConfigPatternError } = require('./customErrors');

const paramsPatterns = ['C0', 'C1', 'R0', 'R1', 'A'];

const checkConfig = (conf) => {
  if (!conf.every(element => paramsPatterns.includes(element))) {
    throw new ConfigPatternError(conf);
  }
}

module.exports = checkConfig;