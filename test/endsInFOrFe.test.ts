import endsInFOrFe from '../src/endsInFOrFe';

describe('When testing endsInFOrFe', () => {
  it('returns a noun with f or fe removed and ves added', () => {
    expect(endsInFOrFe('leaf')).toEqual('leaves');
    expect(endsInFOrFe('knife')).toEqual('knives');
  });
  it('handles the exceptions', () => {
    expect(endsInFOrFe('roof')).toEqual('roofs');
    expect(endsInFOrFe('cliff')).toEqual('cliffs');
  });
  it('returns null if does not match the rule', () => {
    expect(endsInFOrFe('lion')).toEqual(null);
    expect(endsInFOrFe('baby')).toEqual(null);
  });
});
