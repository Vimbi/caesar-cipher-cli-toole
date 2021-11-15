const errors = require('./errorsText');

class ReadError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = this.constructor.name;
  }
}

class FileAccessError extends Error {
  constructor(property) {
    super(`${property} ${errors.noAccess}`);
    this.property = property;
    this.name = this.constructor.name;
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
    super(`${errors.configNotValid} ${property}`);
    this.property = property;
  }
}

module.exports = {
  ReadError,
  FileAccessError,
  ValidationError,
  PropertyRequiredError,
  PropertyDuplicatedError,
  ConfigPatternError,
};