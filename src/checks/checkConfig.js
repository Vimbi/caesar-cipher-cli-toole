const { ConfigPatternError } = require('../errors/customErrors');
const { PARAMETERS_PATTERNS } = require('../constants.js');

const checkConfig = (conf) => {
  const exclude = conf.filter(element => !PARAMETERS_PATTERNS.includes(element));
  if (exclude.length > 0) throw new ConfigPatternError(exclude);
}

module.exports = checkConfig;