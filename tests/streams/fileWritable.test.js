const fs = require('fs');
const { MyWritableStream } = require('../../src/streams');
const { createPipeline } = require('../../src/utils');

describe('MyWritable', () => {

  test('to be defined', () => {
    expect(new MyWritableStream('')).toBeTruthy();
  })

  it('to have been called fs.{open,read,close} ', async () => {
    const spyOpen = jest.spyOn(fs, 'open');
    const spyWrite = jest.spyOn(fs, 'write');
    const spyClose = jest.spyOn(fs, 'close');
    await createPipeline({conf: ['C1','C0','A'], input: 'input.txt', output: 'output.txt'});
    expect(spyOpen).toHaveBeenCalled();
    expect(spyClose).toHaveBeenCalled();
    spyOpen.mockRestore();
    spyWrite.mockRestore();
    spyClose.mockRestore();
  });
})