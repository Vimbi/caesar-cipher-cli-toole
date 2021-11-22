const { PARAMETERS_ARRAY } = require('../constants');

const getConfiguration = (argv) => {
  const resultConf = {};

  argv.forEach((element, index) => {
    PARAMETERS_ARRAY.forEach(param => {
      if (element === param && argv[index + 1]) {
        if (resultConf[element]) {
          resultConf[element] = [...resultConf[element], argv[index + 1]];
        } else {
          resultConf[element] = argv[index + 1];
        }
      }
    });
  });

  return resultConf;
}

module.exports = getConfiguration;