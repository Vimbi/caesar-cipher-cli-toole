const { access } = require('fs/promises');
const { constants } = require('fs');
const errors = require('../errors/errorsText');

const checkFileAccess = async (file) => {
  try {
    if (file) await access(file, constants.R_OK | constants.W_OK)
  } catch (e) {
    if (e) {
      console.error("\x1b[31m", `${file} ${errors.noAccess}`);
      process.exit(1);
    }
  }
}

module.exports = checkFileAccess;