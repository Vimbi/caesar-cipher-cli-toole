const fs = require('fs');
const { Readable } = require('stream');

class MyReadable extends Readable {
  constructor(filename) {
    super();
    this.filename = filename;
  }

  _read() {
    fs.open(this.filename, (err, fd) => {
      if (err) {
        return console.log('err:', err);
      }
      let buf = Buffer.alloc(1024);
      fs.read(fd, buf, 0, buf.length, null, (err, bytesRead) => {
        if (err) {
          return console.log(err);
        }
        this.push(bytesRead > 0 ? buf.slice(0, bytesRead) : null);
        fs.close(fd, err => {
          if (err) throw err;
          this.push(null);
        })
      });
    });
  }
}

module.exports =  MyReadable;
