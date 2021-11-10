const app = require('./src/app');
const { ReadError } = require('./src/errors/customErrors');

try {
  app();
} catch (err) {
  if (err instanceof ReadError) {
    console.error("\x1b[31m", "Исходная ошибка: " + err.cause);
    process.exit(1);
  } else {
    throw err;
  }
}

