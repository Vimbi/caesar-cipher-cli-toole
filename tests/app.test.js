const { spawn } = require('child_process');
const app = require('../src/app');
// jest.mock('../src/app');
jest.mock('../src/utils/getConfiguration.js');

describe('App', () => {

  it('should throw error "Original error: PropertyDuplicatedError: Config must not be duplicated"', () => {
    const command = spawn('node', ['index.js', '-c', 'C1-C1-A-R0', '-c', 'C0']);
    command.stderr.on('data', (data) => {
      expect(data.toString()).toMatch('Original error: PropertyDuplicatedError: Config must not be duplicated');
    });
  });

  it('should throw error "Original error: PropertyRequiredError: Config is required"', () => {
    const command = spawn('node', ['index.js']);
    command.stderr.on('data', (data) => {
      expect(data.toString()).toMatch('Original error: PropertyRequiredError: Config is required');
    });
  });

  it('should throw error "Original error: FileAccessError: nonexistFile.txt cannot be accessed"', () => {
    const command = spawn('node', ['index.js', '-c', 'A', '-i', 'nonexistFile.txt']);
    command.stderr.on('data', (data) => {
      expect(data.toString()).toMatch('Original error: FileAccessError: nonexistFile.txt cannot be accessed');
    });
  });

  it('should throw error "Original error: FileAccessError: nonexistFile.txt cannot be accessed"', () => {
    const command = spawn('node', ['index.js', '-c', 'A', '-i', 'input.txt', '-o', 'nonexistFile.txt']);
    command.stderr.on('data', (data) => {
      expect(data.toString()).toMatch('Original error: FileAccessError: nonexistFile.txt cannot be accessed');
    });
  });

  it('should throw error "Original error: ConfigPatternError: Config is not valid A1"', () => {
    const command = spawn('node', ['index.js', '-c', 'A1', '-i', 'input.txt', '-o', 'nonexistFile.txt']);
    command.stderr.on('data', (data) => {
      expect(data.toString()).toMatch('Original error: ConfigPatternError: Config is not valid A1');
    });
  });

  it('should return "Wihx hx xlnylw. Dlxxpjl pobvw "_" xrdobe!"', () => {
    const command = spawn('node', ['index.js', '-c', 'C1-R1-C0-C0-A-R0-R1-R1-A-C1']);
    command.stdin.write('This is secret. Message about "_" symbol!');
    command.stdout.on('data', (data) => {
      expect(data.toString()).toMatch('This is secret. Message about "_" symbol!');
    });
    command.stdin.end();
  });

  it('should return "Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!"', () => {
    const command = spawn('node', ['index.js', '-c', 'A', '-i', 'input.txt']);
    command.stdout.on('data', (data) => {
      expect(data.toString()).toMatch('Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!');
    });
  });

  it('should to be truthy', async () => {
    await expect(app).toBeTruthy();
    await expect(app()).resolves.toBe();
  })

  it('should to be truthy', async () => {
    await jest.mock('../src/utils/getConfiguration.js', () => {
      return {'-c': ['A','C1'], '-i': 'input.txt', '-o': 'output.txt'}
    });
    await expect(app).toBeTruthy();
    await expect(app()).resolves.toBe();
    await expect(() => {app()}).toThrow();
  })
})