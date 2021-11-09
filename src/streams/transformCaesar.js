const { Transform } = require('stream');

class TransformCaesar extends Transform {
  constructor(props) {
    super(props);
    this.direction = +props?.[1] ? 1 : -1;
    this.shift = 1;
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
    // const direction = props[1] === '1' ? 1 : -1;
    const index = (alphabet.indexOf(letter) + this.direction * this.shift) % 26;
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