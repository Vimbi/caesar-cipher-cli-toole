const selectTransform = require('./selectTransform');
const TransformCaesar = require('../streams/transformCaesar');
const TransformRot = require('../streams/transformRot');
const TransformAtbash = require('../streams/transformAtbash');

describe('selectTransform', () => {
  it('should return new transformCaesar stream', () => {
    expect(selectTransform('C').__proto__).toBe(TransformCaesar.prototype);
    expect(selectTransform('C')).toBeTruthy();
  });

  it('should return new transformRot stream', () => {
    expect(selectTransform('R').__proto__).toBe(TransformRot.prototype);
    expect(selectTransform('R')).toBeTruthy();
  });

  it('should return new transformAtbash stream', () => {
    expect(selectTransform('A').__proto__).toBe(TransformAtbash.prototype);
    expect(selectTransform('A')).toBeTruthy();
  });
})
