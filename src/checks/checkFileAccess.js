const { access } = require('fs/promises');
const { constants } = require('fs');
const { FileAccessError } = require('../errors/customErrors');

const checkFileAccess = async (file) => {
  try {
    if (file) await access(file, constants.R_OK | constants.W_OK)
  } catch (e) {
    if (e) {
      throw new FileAccessError(file);
    }
  }
}

module.exports = checkFileAccess;