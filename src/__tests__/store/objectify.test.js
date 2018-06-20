/* global describe, it, expect */
import isObject from 'lodash/isObject';
import { objectify } from "store/objectify";

describe('objectify', () => {

  it('it should objectify given expected input', () => {
    const data = { id: 'cat', name: 'lorem' };
    const actual = objectify(data);
    expect(isObject(actual)).toBe(true);
    expect(Object.keys(actual)[0]).toBe(data.id);
  });

  it('it should objectify given expected input and custom key', () => {
    const data = { dance: 'cat', name: 'lorem' };
    const actual = objectify(data, 'dance');
    expect(isObject(actual)).toBe(true);
    expect(Object.keys(actual)[0]).toBe(data.dance);
  });

  it('it should throw given unexpected input', () => {
    const data = { a: 200 };
    expect(() => {
      objectify(data)
    }).toThrow();
  });

});
