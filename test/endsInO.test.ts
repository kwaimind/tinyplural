import endsInO from '../src/endsInO';

describe('When testing endsInO', () => {
  it('returns an constant + O with es added', () => {
    expect(endsInO('hero')).toEqual('heroes');
    expect(endsInO('echo')).toEqual('echoes');
  });
  it('returns an vowel + O with s added', () => {
    expect(endsInO('zoo')).toEqual('zoos');
    expect(endsInO('stereo')).toEqual('stereos');
  });
  it('returns null if does not match the rule', () => {
    expect(endsInO('lion')).toEqual(null);
    expect(endsInO('aircraft')).toEqual(null);
  });
});
