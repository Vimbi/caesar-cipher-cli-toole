const fs = require('fs');

const checkFile = (file) => {
  if (file) fs.access(file, fs.constants.F_OK, (err) => {
    console.log(`${file} ${err ? 'cannot be accessed' : 'can be accessed'}`);
  });
}

module.exports = checkFile;