import { matchesRegex } from '../src/matchesRegex';

describe('When testing endsInFOrFe', () => {
  it('returns a noun with f or fe removed and ves added', () => {
    expect(
      matchesRegex('leaf', '(f|fe)$', (noun: string) =>
        noun.replace(/(f|fe)$/, 'ves')
      )
    ).toEqual('leaves');
    expect(
      matchesRegex('knife', '(f|fe)$', (noun: string) =>
        noun.replace(/(f|fe)$/, 'ves')
      )
    ).toEqual('knives');
  });
  it('handles the exceptions', () => {
    expect(matchesRegex('roof', '(roof|cliff|proof)', 's')).toEqual('roofs');
    expect(matchesRegex('cliff', '(roof|cliff|proof)', 's')).toEqual('cliffs');
  });
  it('returns null if does not match the rule', () => {
    expect(matchesRegex('lion', '(roof|cliff|proof)', 's')).toEqual(null);
    expect(matchesRegex('baby', '(roof|cliff|proof)', 's')).toEqual(null);
  });
});
