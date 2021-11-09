const TransformCaesar = require('./transformCaesar');

class TransformAtbash extends TransformCaesar {
  makeShift = (alphabet, letter) => {
    const index = alphabet.indexOf(letter);
    const result = alphabet.reverse()[index];
    return result;
  }
}

module.exports = TransformAtbash;