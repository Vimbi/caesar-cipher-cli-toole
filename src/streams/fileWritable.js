const { Writable } = require('stream');
const fs = require('fs');
const errors = require('../errors/errorsText');

class MyWritable extends Writable {
  constructor(filename) {
    super();
    this.filename = filename;
    this.fd = null;
  }

  _construct(callback) {
    fs.open(this.filename, 'a', (err, fd) => {
      if (err) {
        console.error("\x1b[31m", `${this.filename} ${errors.noAccess}`);
        process.exit(1);
      } else {
        this.fd = fd;
        callback();
      }
    });
  }

  _write(chunk, encoding, callback) {
    fs.write(this.fd, chunk, callback);
  }

  _destroy(err, callback) {
    if (this.fd) {
      fs.close(this.fd, (er) => callback(er || err));
    } else {
      callback(err);
    }
  }
}

module.exports = MyWritable;
