const { PropertyRequiredError, PropertyDuplicatedError } = require('./customErrors');

const checkMissOrDuplicated = (c, config, i, input, o, output) => {

  if (c == undefined && config == undefined) {
    throw new PropertyRequiredError('Config');
  }

  if (c != undefined && config != undefined || Array.isArray(c) || Array.isArray(config)) {
    throw new PropertyDuplicatedError('Config');
  }

  if (i != undefined && input != undefined || Array.isArray(i) || Array.isArray(input)) {
    throw new PropertyDuplicatedError('Input file');
  }

  if (o != undefined && output != undefined || Array.isArray(o) || Array.isArray(output)) {
    throw new PropertyDuplicatedError('Output file');
  }
}

module.exports = checkMissOrDuplicated;