const fs = require('fs');
const { MyReadableStream } = require('../../src/streams');
const { createPipeline } = require('../../src/utils');

describe('MyReadable', () => {

  it('to be defined', () => {
    expect(new MyReadableStream('')).toBeDefined();
  });

  it('to have been called fs.{open,read,close} ', async () => {
    const spyOpen = jest.spyOn(fs, 'open');
    const spyRead = jest.spyOn(fs, 'read');
    const spyClose = jest.spyOn(fs, 'close');
    await createPipeline({conf: ['C1','C0','A'], input: 'input.txt', output: 'output.txt'});
    expect(spyOpen).toHaveBeenCalled();
    expect(spyRead).toHaveBeenCalled();
    expect(spyClose).toHaveBeenCalled();
    spyOpen.mockRestore();
    spyRead.mockRestore();
    spyClose.mockRestore();
  });
})