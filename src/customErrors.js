const errors = require('./constants');

class ReadError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = 'ReadError';
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super(`${property} ${errors.paramRequired}`);
    this.property = property;
  }
}

class PropertyDuplicatedError extends ValidationError {
  constructor(property) {
    super(`${property} ${errors.paramDuplicated}`);
    this.property = property;
  }
}

class ConfigPatternError extends ValidationError {
  constructor(property) {
    super(`${property} ${errors.configNotValid}`);
    this.property = property;
  }
}

module.exports = {
  ReadError,
  ValidationError,
  PropertyRequiredError,
  PropertyDuplicatedError,
  ConfigPatternError
};