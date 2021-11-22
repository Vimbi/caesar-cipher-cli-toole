const { TransformCaesar, TransformRot, TransformAtbash } = require('../streams');

const selectTransform = (configElement) => {
  typeCipher = configElement[0];
  let transformStream;
  switch (typeCipher) {
    case 'C':
      transformStream = new TransformCaesar(configElement);
      break;
    case 'R':
      transformStream = new TransformRot(configElement);
      break;
    case 'A':
      transformStream = new TransformAtbash();
      break;
  }
  return transformStream;
}

module.exports = selectTransform;