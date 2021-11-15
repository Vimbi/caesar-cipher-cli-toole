const { Transform } = require('stream');
const { ALPHABET_LENGTH, ALPHABET_UPPER_CASE, ALPHABET_LOWER_CASE } = require('../constants');

class TransformCaesar extends Transform {
  constructor(props) {
    super(props);
    this.direction = +props?.[1] ? 1 : -1;
    this.shift = 1;
    this.up = ALPHABET_UPPER_CASE;
    this.low = ALPHABET_LOWER_CASE;
  }

  makeShift = (alphabet, letter) => {
    const index = (alphabet.indexOf(letter) + this.direction * this.shift) % ALPHABET_LENGTH;
    const result = alphabet.slice(index, index === -1 ? undefined : index + 1);
    return result;
  }

  transformChar = (char) => {
    let resultChar = char;
    if ((/[A-Za-z]/g).test(char)) {
      resultChar = /[A-Z]/g.test(char) ? this.makeShift(this.up, char) : this.makeShift(this.low, char);
    }
    return resultChar;
  }

  _transform(chunk, encoding, callback) {
    if (encoding === "buffer") chunk = chunk.toString();
    const initialArray = [...chunk];
    const resultArray = initialArray.map(element => this.transformChar(element));
    chunk = resultArray.join('');
    callback(null, `${chunk}`);
  }
}

module.exports = TransformCaesar;