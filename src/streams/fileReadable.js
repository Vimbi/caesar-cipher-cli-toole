const fs = require('fs');
const { Readable } = require('stream');
const errors = require('../errors/errorsText');

class MyReadable extends Readable {
  constructor(filename) {
    super();
    this.filename = filename;
    this.fd = null;
  }

  _construct(callback) {
    fs.open(this.filename, (err, fd) => {
      if (err) {
        console.error("\x1b[31m", `${this.filename} ${errors.noAccess}`);
        process.exit(1);
      } else {
        this.fd = fd;
        callback();
      }
    });
  }

  _read() {
    const buf = Buffer.alloc(1024);
    fs.read(this.fd, buf, 0, 1024, null, (err, bytesRead) => {
      if (err) {
        this.destroy(err);
      } else {
        this.push(bytesRead > 0 ? buf.slice(0, bytesRead) : null);
      }
    });
  }

  _destroy(err, callback) {
    if (this.fd) {
      fs.close(this.fd, (er) => callback(er || err));
    } else {
      callback(err);
    }
  }
}

module.exports =  MyReadable;
