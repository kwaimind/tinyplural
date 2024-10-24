import { matchesRegex } from '../src/matchesRegex';

describe('When testing nouns ending in O', () => {
  it('returns an constant + O with es added', () => {
    expect(matchesRegex('hero', '[^aeiou]o$', 'es')).toEqual('heroes');
    expect(matchesRegex('echo', '[^aeiou]o$', 'es')).toEqual('echoes');
  });
  it('returns an vowel + O with s added', () => {
    expect(matchesRegex('zoo', '[aeiou]o$', 's')).toEqual('zoos');
    expect(matchesRegex('stereo', '[aeiou]o$', 's')).toEqual('stereos');
  });
  it('returns null if does not match the rule', () => {
    expect(matchesRegex('lion', '[^aeiou]o$', 'es')).toEqual(null);
    expect(matchesRegex('aircraft', '[^aeiou]o$', 'es')).toEqual(null);
  });
});
