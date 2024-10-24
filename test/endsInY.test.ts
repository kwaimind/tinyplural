import { matchesRegex } from '../src/matchesRegex';

describe('When testing endsInY', () => {
  it('returns an constant + Y with es added', () => {
    expect(
      matchesRegex('city', '[^aeiou]y$', (noun: string) =>
        noun.replace('y', 'ies')
      )
    ).toEqual('cities');
    expect(
      matchesRegex('baby', '[^aeiou]y$', (noun: string) =>
        noun.replace('y', 'ies')
      )
    ).toEqual('babies');
  });
  it('returns an vowel + Y with s added', () => {
    expect(matchesRegex('day', '[aeiou]y$', 's')).toEqual('days');
    expect(matchesRegex('guy', '[aeiou]y$', 's')).toEqual('guys');
  });
  it('returns null if does not match the rule', () => {
    expect(matchesRegex('lion', '[aeiou]y$', 'ies')).toEqual(null);
    expect(matchesRegex('aircraft', '[aeiou]y$', 'ies')).toEqual(null);
  });
});
