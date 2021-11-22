const { Writable } = require('stream');
const { open, write, close } = require('fs');

class MyWritableStream extends Writable {
  constructor(filename) {
    super();
    this.filename = filename;
    this.fd = null;
  }

  _construct(callback) {
    open(this.filename, (err, fd) => {
      if (err) {
        callback(this.filename);
      } else {
        open(this.filename, 'a', (err, fd) => {
          if (err) {
            callback(this.filename);
          } else {
            this.fd = fd;
            callback();
          }
        })
      }
    })
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

module.exports = MyWritableStream;
