'use strict';

describe('commonjs', () => {
  const nullThrows = require('../');

  test('return value', () => {
    const obj = {};
    expect(nullThrows(obj)).toBe(obj);
  });

  test('it does not throw', () => {
    expect(() => {
      nullThrows('');
    }).not.toThrow();

    expect(() => {
      nullThrows(NaN);
    }).not.toThrow();

    expect(() => {
      nullThrows(false);
    }).not.toThrow();
  });

  test('it throws', () => {
    expect(() => {
      nullThrows(null);
    }).toThrow(new Error('A null has been thrown: null'));

    expect(() => {
      nullThrows(undefined);
    }).toThrow(new Error('A null has been thrown: undefined'));

    expect(() => {
      nullThrows(undefined, 'My error message');
    }).toThrow(new Error('My error message'));
  });
});

describe('import interop', () => {
  const interopRequireDefault = require('../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js');

  const nullThrows = interopRequireDefault(require('../'));

  test('return value', () => {
    const obj = {};
    expect(nullThrows(obj)).toBe(obj);
  });

  test('it does not throw', () => {
    expect(() => {
      nullThrows('');
    }).not.toThrow();

    expect(() => {
      nullThrows(NaN);
    }).not.toThrow();

    expect(() => {
      nullThrows(false);
    }).not.toThrow();
  });

  test('it throws', () => {
    expect(() => {
      nullThrows(null);
    }).toThrow(new Error('A null has been thrown: null'));

    expect(() => {
      nullThrows(undefined);
    }).toThrow(new Error('A null has been thrown: undefined'));

    expect(() => {
      nullThrows(undefined, 'My error message');
    }).toThrow(new Error('My error message'));
  });
});
