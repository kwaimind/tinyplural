import { isNonChanging } from '../src/isNonChanging';

describe('When testing isNonChanging', () => {
  it('returns an non-changing noun', () => {
    expect(isNonChanging('fish')).toEqual('fish');
    expect(isNonChanging('deer')).toEqual('deer');
  });
  it('returns null if no non changing noun is found', () => {
    expect(isNonChanging('lion')).toEqual(null);
  });
});
