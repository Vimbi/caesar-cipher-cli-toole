const fs = require('fs');
const { MyReadableStream } = require('../../src/streams');
// const app = require('../../src/app');
const { PassThrough } = require('stream');

describe('MyReadable', () => {

  test('to be defined', () => {
    expect(new MyReadableStream('')).toBeDefined();
  });

  // test('plays video', () => {
  //   const mockReadable = new PassThrough();
  //   const mockFilePath = './file.txt'
  //   const spy = jest.spyOn(fs, 'open');
  //   let openFileCallback;
  //   spy.mockImplementation((path, options, callback) => {
  //     openFileCallback = callback;
  //   });

    // const readable = new MyReadableStream(mockFilePath);



    // // readable()
    // const isPlaying = video.play();

    // expect(spy).toHaveBeenCalled();
    // expect(isPlaying).toBe(true);

    // spy.mockRestore();
  // });
})