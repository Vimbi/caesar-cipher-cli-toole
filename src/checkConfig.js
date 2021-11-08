const process = require('process');
const errors = require('./errorsText');
const { ConfigPatternError } = require('./customErrors');

const paramsPatterns = ['C0', 'C1', 'R0', 'R1', 'A'];

const checkConfig = (conf) => {
  const exclude = conf.filter(element => !paramsPatterns.includes(element));
  if (exclude) throw new ConfigPatternError(exclude);
}

module.exports = checkConfig;