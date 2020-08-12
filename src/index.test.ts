import makeSuffix, { isIregular, isNonChanging, isONNoun, consonantO } from './index';
import nonChangingNouns from './data/nonChangingNouns';
import irregularNouns from './data/irregularNouns';

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
  it('returns the correct constant + O noun', () => {
    expect(makeSuffix('hero', 1)).toEqual('1 hero');
    expect(makeSuffix('hero', 2)).toEqual('2 heroes');
    expect(makeSuffix('tomato', 1)).toEqual('1 tomato');
    expect(makeSuffix('tomato', 2)).toEqual('2 tomatoes');
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

describe('When testing consonantO', () => {
  it('returns an plural with es added', () => {
    expect(consonantO('hero')).toEqual('hero');
    expect(consonantO('hero', 2)).toEqual('heroes');
    expect(consonantO('echo')).toEqual('echo');
    expect(consonantO('echo', 2)).toEqual('echoes');
  });
  it('returns null if no non changing noun is found', () => {
    expect(consonantO('lion')).toEqual(null);
    expect(consonantO('aircraft')).toEqual(null);
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

describe('Checking data arrays for duplicates', () => {
  it('nonChangingNouns', () => {
    expect(new Set(nonChangingNouns).size !== nonChangingNouns.length).toBe(false);
  });
  it('irregularNouns', () => {
    const uniqueValues = new Set(irregularNouns.map((item) => item.single));
    expect(uniqueValues.size < irregularNouns.length).toBe(false);
  });
});
