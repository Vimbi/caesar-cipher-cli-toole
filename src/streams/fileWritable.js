const { Writable } = require('stream');
const fs = require('fs/promises');
const { open, write, close } = require('fs');

class MyWritable extends Writable {
  constructor(filename) {
    super();
    this.filename = filename;
    this.fd = null;
  }

  _construct(callback) {
    fs.open(this.filename)
      .then(() => {
        open(this.filename, 'a', (err, fd) => {
          if (err) {
            callback(this.filename);
          } else {
            this.fd = fd;
            callback();
          }
        });
      })
      .catch((err) => callback(this.filename));
  }

  _write(chunk, encoding, callback) {
    write(this.fd, chunk, callback);

  }

  _destroy(err, callback) {
    if (this.fd) {
     close(this.fd, (er) => callback(er || err));
    } else {
      callback(err);
    }
  }
}

module.exports = MyWritable;
