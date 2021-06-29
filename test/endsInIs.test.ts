import endsInIs from '../src/endsInIs';

describe('When testing endsInIs', () => {
  it('returns i for nouns ending in us', () => {
    expect(endsInIs('analysis')).toEqual('analyses');
    expect(endsInIs('basis')).toEqual('bases');
    expect(endsInIs('crisis')).toEqual('crises');
  });
});
