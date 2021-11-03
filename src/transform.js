const { Transform } = require('stream');
const errors = require('./constants');

class Transformer extends Transform {
  constructor(props) {
    super(props);
    this.type = props[0];
    this.direction = props[1] === '1' ? 1 : -1;
    this.up = [
      'A', 'B', 'C', 'D', 'E', 'F',
      'G', 'H', 'I', 'J', 'K', 'L',
      'M', 'N', 'O', 'P', 'Q', 'R',
      'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'
    ];
    this.low = [
      'a', 'b', 'c', 'd', 'e', 'f',
      'g', 'h', 'i', 'j', 'k', 'l',
      'm', 'n', 'o', 'p', 'q', 'r',
      's', 't', 'u', 'v', 'w', 'x',
      'y', 'z'
    ];
  }

  makeShift = (alphabet, letter) => {
    let index = 0;
    let result = '';
    switch (this.type) {
      case 'C':
        index = (alphabet.indexOf(letter) + this.direction) % 26;
        result = alphabet.slice(index, index === -1 ? undefined : index + 1);
        break;
      case 'R':
        index = (alphabet.indexOf(letter) + this.direction * 8) % 26;
        result = alphabet.slice(index, index === -1 ? undefined : index + 1);
        break;
      case 'A':
        index = alphabet.indexOf(letter);
        result = alphabet.reverse()[index];
        break;
    }
    return result;
  }

  _transform(chunk, encoding, callback) {
    if (encoding === "buffer") chunk = chunk.toString();
    const initialArray = [...chunk];
    const resultArray = initialArray.map(char => {
      if ((/[A-Za-z]/g).test(char)) {
        if (/[A-Z]/g.test(char)) {
          return this.makeShift(this.up, char);
        } else {
          return this.makeShift(this.low, char);
        }
      } else {
        return char;
      }
    })
    chunk = resultArray.join('');
    callback(null, `${chunk}`);
  }
}

module.exports = Transformer;