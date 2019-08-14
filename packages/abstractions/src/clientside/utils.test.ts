import validations from './validations';

describe('subtract', () => {
  it('works', () => {
    expect(validations.subtract(5, 2)).toEqual(3);
  });
});

describe('divide', () => {
  it('works', () => {
    expect(validations.divide(12, 2)).toBe(6);
  });
});
