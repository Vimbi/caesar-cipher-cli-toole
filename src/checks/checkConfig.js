const { ConfigPatternError } = require('../errors/customErrors');

const paramsPatterns = ['C0', 'C1', 'R0', 'R1', 'A'];

const checkConfig = (conf) => {
  const exclude = conf.filter(element => !paramsPatterns.includes(element));
  if (exclude.length > 0) throw new ConfigPatternError(exclude);
}

module.exports = checkConfig;