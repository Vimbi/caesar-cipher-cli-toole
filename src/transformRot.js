const TransformCaesar = require('./transformCaesar');

class TransformRot extends TransformCaesar {
  constructor(props) {
    super(props);
    this.shift = 8;
  }
}

module.exports = TransformRot;