import makeSuffix, { isIregular, isNonChanging, isONNoun } from './index';

describe('When testing makeSuffix', () => {
  it('returns the correct irregular noun', () => {
    expect(makeSuffix('foot', 1)).toEqual('1 foot');
    expect(makeSuffix('foot', 2)).toEqual('2 feet');
  });
  it('returns the correct non changing noun', () => {
    expect(makeSuffix('fish', 1)).toEqual('1 fish');
    expect(makeSuffix('fish', 2)).toEqual('2 fish');
  });
  it('returns the correct ON noun', () => {
    expect(makeSuffix('phenomenon', 1)).toEqual('1 phenomenon');
    expect(makeSuffix('phenomenon', 2)).toEqual('2 phenomena');
    expect(makeSuffix('criterion', 1)).toEqual('1 criterion');
    expect(makeSuffix('criterion', 2)).toEqual('2 criteria');
  });
});

describe('When testing isIregular', () => {
  it('returns an irregular noun', () => {
    expect(isIregular('foot', 1)).toEqual('foot');
    expect(isIregular('man', 2)).toEqual('men');
  });
  it('returns null if no irregular noun is found', () => {
    expect(isIregular('footz', 1)).toEqual(null);
  });
});

describe('When testing isNonChanging', () => {
  it('returns an non changing noun', () => {
    expect(isNonChanging('fish')).toEqual('fish');
    expect(isNonChanging('deer')).toEqual('deer');
  });
  it('returns null if no non changing noun is found', () => {
    expect(isNonChanging('lion')).toEqual(null);
  });
});

describe('When testing isONNoun', () => {
  it('returns an ON type noun', () => {
    expect(isONNoun('phenomenon', 2)).toEqual('phenomena');
    expect(isONNoun('criterion', 2)).toEqual('criteria');
  });
  it('returns null if no non changing noun is found', () => {
    expect(isONNoun('child')).toEqual(null);
    // expect(isONNoun('lion')).toEqual(null);
  });
});
