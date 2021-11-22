const app = require('./src/app');
const { ReadError } = require('./src/errors/customErrors');

app().catch((err) => {
  if (err instanceof ReadError) {
    console.error("\x1b[31m%s\x1b[0m", "Original error: " + err.cause);
    process.exit(1);
  } else {
    throw err;
  }
});