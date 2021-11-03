const errors = require('./constants');
const process = require('process');

const checkMissOrDuplicated = (c, config, i, input, o, output) => {
  if (c == undefined && config == undefined) {
    console.error("\x1b[31m", errors.configRequired);
    process.exit(1);
  }
  if (c != undefined && config != undefined || Array.isArray(c) || Array.isArray(config)) {
    console.error("\x1b[31m", `Error: ${errors.configDuplicated}`);
    process.exit(1);
  }
  if (i != undefined && input != undefined || Array.isArray(i) || Array.isArray(input)) {
    console.error("\x1b[31m", `Error: ${errors.inputDuplicated}`);
    process.exit(1);
  }
  if (o != undefined && output != undefined || Array.isArray(o) || Array.isArray(output)) {
    console.error("\x1b[31m", `Error: ${errors.outputDuplicated}`);
    process.exit(1);
  }
}

module.exports = checkMissOrDuplicated;