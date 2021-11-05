const { Writable } = require('stream');
const fs = require('fs');

class MyWritable extends Writable {
  constructor(filename) {
    super();
    this.filename = filename;
  }

  _write(chunk, encoding, callback) {
    if (encoding === "buffer") chunk = chunk.toString();
    fs.open(this.filename, 'a', (err, fd) => {
      if (err) {
        console.log(err);
      }
      fs.write(fd, chunk, (err) => {
        if (err) {
          console.log(err);
        }
        callback(null, `${chunk}`);
      });
    });
  }
}

module.exports = MyWritable;
