const { ValidationError, ReadError, PropertyRequiredError, PropertyDuplicatedError, ConfigPatternError, FileAccessError } = require('../../src/errors/customErrors');

describe('ReadError', () => {
  const errorFunction = () => {
    throw new ReadError('Error');
  };

  it('to be defined', () => {
    expect(errorFunction).toBeDefined();
  });
  it('should throw ReadError', () => {
    expect(errorFunction).toThrow(ReadError);
  });
  it('should throw text Error', () => {
    expect(errorFunction).toThrow('Error');
  });
});

describe('FileAccessError', () => {
  const errorFunction = () => {
    throw new FileAccessError('Error');
  };

  it('to be defined', () => {
    expect(errorFunction).toBeDefined();
  });
  it('should throw FileAccessError', () => {
    expect(errorFunction).toThrow(FileAccessError);
  });
  it('should throw text Error', () => {
    expect(errorFunction).toThrow('Error');
  });
});

describe('ValidationError', () => {
  const errorFunction = () => {
    throw new ValidationError('Error');
  };

  it('to be defined', () => {
    expect(errorFunction).toBeDefined();
  });
  it('should throw ValidationError', () => {
    expect(errorFunction).toThrow(ValidationError);
  });
  it('should throw text Error', () => {
    expect(errorFunction).toThrow('Error');
  });
});

describe('PropertyRequiredError', () => {
  const errorFunction = () => {
    throw new PropertyRequiredError('Error');
  };

  it('to be defined', () => {
    expect(errorFunction).toBeDefined();
  });
  it('should throw PropertyRequiredError', () => {
    expect(errorFunction).toThrow(PropertyRequiredError);
  });
  it('should throw text Error', () => {
    expect(errorFunction).toThrow('Error');
  });
});

describe('PropertyDuplicatedError', () => {
  const errorFunction = () => {
    throw new PropertyDuplicatedError('Error');
  };

  it('to be defined', () => {
    expect(errorFunction).toBeDefined();
  });
  it('should throw PropertyDuplicatedError', () => {
    expect(errorFunction).toThrow(PropertyDuplicatedError);
  });
  it('should throw text Error', () => {
    expect(errorFunction).toThrow('Error');
  });
});

describe('ConfigPatternError', () => {
  const errorFunction = () => {
    throw new ConfigPatternError('Error');
  };

  it('to be defined', () => {
    expect(errorFunction).toBeDefined();
  });
  it('should throw ConfigPatternError', () => {
    expect(errorFunction).toThrow(ConfigPatternError);
  });
  it('should throw text Error', () => {
    expect(errorFunction).toThrow('Error');
  });
});