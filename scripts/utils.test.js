const { parseQueryString } = require('./utils');

describe('parseQueryString', () => {
  test('should return an empty object for an empty string', () => {
    expect(parseQueryString('')).toEqual({});
  });

  test('should parse a single key-value pair', () => {
    expect(parseQueryString('?foo=bar')).toEqual({ foo: 'bar' });
  });

  test('should parse multiple key-value pairs', () => {
    expect(parseQueryString('?foo=bar&baz=qux')).toEqual({ foo: 'bar', baz: 'qux' });
  });

  test('should handle a key with no value', () => {
    expect(parseQueryString('?foo=')).toEqual({ foo: '' });
  });

  test('should handle a key with no value and other keys', () => {
    expect(parseQueryString('?foo=&baz=qux')).toEqual({ foo: '', baz: 'qux' });
  });

  test('should handle URI encoded characters', () => {
    expect(parseQueryString('?foo=bar%20baz')).toEqual({ foo: 'bar baz' });
  });
});
