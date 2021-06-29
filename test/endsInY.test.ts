import endsInY from '../src/endsInY';

describe('When testing endsInY', () => {
  it('returns an constant + Y with es added', () => {
    expect(endsInY('city')).toEqual('cities');
    expect(endsInY('baby')).toEqual('babies');
  });
  it('returns an vowel + Y with s added', () => {
    expect(endsInY('day')).toEqual('days');
    expect(endsInY('guy')).toEqual('guys');
  });
  it('returns null if does not match the rule', () => {
    expect(endsInY('lion')).toEqual(null);
    expect(endsInY('aircraft')).toEqual(null);
  });
});
