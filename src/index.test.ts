import makeSuffix, {
  isIregular,
  isNonChanging,
  isONNoun,
  endsInO,
  endsInY,
  endsInFOrFe,
} from './index';
import nonChangingNouns from './data/nonChangingNouns';
import irregularNouns from './data/irregularNouns';

describe('When testing makeSuffix', () => {
  it('returns the correct irregular noun', () => {
    expect(makeSuffix('foot', 1)).toEqual('1 foot');
    expect(makeSuffix('foot', 2)).toEqual('2 feet');
  });
  it('returns the correct non-changing noun', () => {
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
  it('returns the correct vowel + O noun', () => {
    expect(makeSuffix('zoo', 1)).toEqual('1 zoo');
    expect(makeSuffix('zoo', 2)).toEqual('2 zoos');
    expect(makeSuffix('stereo', 1)).toEqual('1 stereo');
    expect(makeSuffix('stereo', 2)).toEqual('2 stereos');
  });
  it('returns a noun with f or fe removed and ves added', () => {
    expect(makeSuffix('leaf')).toEqual('1 leaf');
    expect(makeSuffix('leaf', 2)).toEqual('2 leaves');
    expect(makeSuffix('knife')).toEqual('1 knife');
    expect(makeSuffix('knife', 2)).toEqual('2 knives');
    expect(makeSuffix('roof')).toEqual('1 roof');
    expect(makeSuffix('roof', 2)).toEqual('2 roofs');
    expect(makeSuffix('cliff')).toEqual('1 cliff');
    expect(makeSuffix('cliff', 2)).toEqual('2 cliffs');
  });
  it.skip('returns the default and adds s', () => {
    expect(makeSuffix('car', 1)).toEqual('1 car');
    expect(makeSuffix('cars', 1)).toEqual('1 car');
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
  it('returns an non-changing noun', () => {
    expect(isNonChanging('fish')).toEqual('fish');
    expect(isNonChanging('deer')).toEqual('deer');
  });
  it('returns null if no non changing noun is found', () => {
    expect(isNonChanging('lion')).toEqual(null);
  });
});

describe('When testing endsInO', () => {
  it('returns an constant + O with es added', () => {
    expect(endsInO('hero')).toEqual('hero');
    expect(endsInO('hero', 2)).toEqual('heroes');
    expect(endsInO('echo')).toEqual('echo');
    expect(endsInO('echo', 2)).toEqual('echoes');
  });
  it('returns an vowel + O with s added', () => {
    expect(endsInO('zoo')).toEqual('zoo');
    expect(endsInO('zoo', 2)).toEqual('zoos');
    expect(endsInO('stereo')).toEqual('stereo');
    expect(endsInO('stereo', 2)).toEqual('stereos');
  });
  it('returns null if does not match the rule', () => {
    expect(endsInO('lion')).toEqual(null);
    expect(endsInO('aircraft')).toEqual(null);
  });
});

describe('When testing endsInY', () => {
  it('returns an constant + Y with es added', () => {
    expect(endsInY('city')).toEqual('city');
    expect(endsInY('city', 2)).toEqual('cities');
    expect(endsInY('baby')).toEqual('baby');
    expect(endsInY('baby', 2)).toEqual('babies');
  });
  it('returns an vowel + Y with s added', () => {
    expect(endsInY('day')).toEqual('day');
    expect(endsInY('day', 2)).toEqual('days');
    expect(endsInY('guy')).toEqual('guy');
    expect(endsInY('guy', 2)).toEqual('guys');
  });
  it('returns null if does not match the rule', () => {
    expect(endsInY('lion')).toEqual(null);
    expect(endsInY('aircraft')).toEqual(null);
  });
});

describe('When testing endsInFOrFe', () => {
  it('returns a noun with f or fe removed and ves added', () => {
    expect(endsInFOrFe('leaf')).toEqual('leaf');
    expect(endsInFOrFe('leaf', 2)).toEqual('leaves');
    expect(endsInFOrFe('knife')).toEqual('knife');
    expect(endsInFOrFe('knife', 2)).toEqual('knives');
  });
  it('handles the exceptions', () => {
    expect(endsInFOrFe('roof')).toEqual('roof');
    expect(endsInFOrFe('roof', 2)).toEqual('roofs');
    expect(endsInFOrFe('cliff')).toEqual('cliff');
    expect(endsInFOrFe('cliff', 2)).toEqual('cliffs');
  });
  it('returns null if does not match the rule', () => {
    expect(endsInFOrFe('lion')).toEqual(null);
    expect(endsInFOrFe('baby')).toEqual(null);
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
