import { standardNoun } from '../src/standardNoun';

describe('When testing standardNoun', () => {
  it('returns simple noun with s', () => {
    expect(standardNoun('car')).toEqual('cars');
    expect(standardNoun('book')).toEqual('books');
    expect(standardNoun('apple')).toEqual('apples');
  });
});
