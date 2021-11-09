const fs = require('fs');
const errors = require('./errorsText');

const checkFile = (file) => {
  if (file) fs.access(file, fs.constants.F_OK, (err) => {
    if (err) {
      console.error("\x1b[31m", `${file} ${errors.noAccess}`);
      process.exit(1);
    }
  });
}

module.exports = checkFile;