const paramsArr = ['-c', '--config', '-i', '--input', '-o', '--output'];

const getConfiguration = (argv) => {
  const resultConf = {};

  argv.forEach((element, index) => {
    paramsArr.forEach(param => {
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