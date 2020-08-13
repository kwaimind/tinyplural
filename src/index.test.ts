import makeSuffix, {
  isIregular,
  isNonChanging,
  endsInO,
  endsInY,
  endsInFOrFe,
  otherNouns,
  standardNouns,
  usNouns,
  isNouns,
} from './index';
import nonChangingNouns from './data/nonChangingNouns';
import irregularNouns from './data/irregularNouns';

// https://www.ef.com/wwen/english-resources/english-grammar/singular-and-plural-nouns/

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
  it('returns simple nouns with s added', () => {
    expect(makeSuffix('car', 1)).toEqual('1 car');
    expect(makeSuffix('car', 2)).toEqual('2 cars');
    expect(makeSuffix('book', 1)).toEqual('1 book');
    expect(makeSuffix('book', 2)).toEqual('2 books');
    expect(makeSuffix('apple', 1)).toEqual('1 apple');
    expect(makeSuffix('apple', 2)).toEqual('2 apples');
    expect(makeSuffix('house', 1)).toEqual('1 house');
    expect(makeSuffix('house', 2)).toEqual('2 houses');
    expect(makeSuffix('boat', 1)).toEqual('1 boat');
    expect(makeSuffix('boat', 2)).toEqual('2 boats');
  });
  it('generic tests', () => {
    expect(makeSuffix('penny', 1)).toEqual('1 penny');
    expect(makeSuffix('penny', 2)).toEqual('2 pennies');
    expect(makeSuffix('spy', 1)).toEqual('1 spy');
    expect(makeSuffix('spy', 2)).toEqual('2 spies');
    expect(makeSuffix('city', 1)).toEqual('1 city');
    expect(makeSuffix('city', 3)).toEqual('3 cities');
    expect(makeSuffix('daisy', 1)).toEqual('1 daisy');
    expect(makeSuffix('daisy', 100)).toEqual('100 daisies');
    expect(makeSuffix('tooth', 1)).toEqual('1 tooth');
    expect(makeSuffix('tooth', 100)).toEqual('100 teeth');
    expect(makeSuffix('half', 1)).toEqual('1 half');
    expect(makeSuffix('half', 2)).toEqual('2 halves');
    expect(makeSuffix('life', 1)).toEqual('1 life');
    expect(makeSuffix('life', 2)).toEqual('2 lives');
    expect(makeSuffix('elf', 1)).toEqual('1 elf');
    expect(makeSuffix('elf', 5)).toEqual('5 elves');
    expect(makeSuffix('loaf', 1)).toEqual('1 loaf');
    expect(makeSuffix('loaf', 5)).toEqual('5 loaves');
    expect(makeSuffix('potato', 1)).toEqual('1 potato');
    expect(makeSuffix('potato', 5)).toEqual('5 potatoes');
    expect(makeSuffix('tomato', 1)).toEqual('1 tomato');
    expect(makeSuffix('tomato', 5)).toEqual('5 tomatoes');
    expect(makeSuffix('bus', 1)).toEqual('1 bus');
    expect(makeSuffix('bus', 2)).toEqual('2 buses');
    expect(makeSuffix('quiz', 1)).toEqual('1 quiz');
    expect(makeSuffix('quiz', 2)).toEqual('2 quizzes');
    expect(makeSuffix('box', 1)).toEqual('1 box');
    expect(makeSuffix('box', 2)).toEqual('2 boxes');
    expect(makeSuffix('tax', 1)).toEqual('1 tax');
    expect(makeSuffix('tax', 2)).toEqual('2 taxes');
  });
  it('odd us and is nouns', () => {
    expect(makeSuffix('cactus', 1)).toEqual('1 cactus');
    expect(makeSuffix('cactus', 2)).toEqual('2 cactuses');
    expect(makeSuffix('fungus', 1)).toEqual('1 fungus');
    expect(makeSuffix('fungus', 2)).toEqual('2 funguses');
    expect(makeSuffix('stimulus', 1)).toEqual('1 stimulus');
    expect(makeSuffix('stimulus', 2)).toEqual('2 stimuluses');
    expect(makeSuffix('syllabus', 1)).toEqual('1 syllabus');
    expect(makeSuffix('syllabus', 2)).toEqual('2 syllabuses');
    expect(makeSuffix('analysis', 1)).toEqual('1 analysis');
    expect(makeSuffix('analysis', 2)).toEqual('2 analyses');
    expect(makeSuffix('basis', 1)).toEqual('1 basis');
    expect(makeSuffix('basis', 2)).toEqual('2 bases');
    expect(makeSuffix('crisis', 1)).toEqual('1 crisis');
    expect(makeSuffix('crisis', 2)).toEqual('2 crises');
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

describe('When testing otherNouns', () => {
  it('returns an the correct noun', () => {
    expect(otherNouns('bus', 1)).toEqual('bus');
    expect(otherNouns('bus', 2)).toEqual('buses');
    expect(otherNouns('quiz', 1)).toEqual('quiz');
    expect(otherNouns('quiz', 2)).toEqual('quizzes');
    expect(otherNouns('box', 1)).toEqual('box');
    expect(otherNouns('box', 2)).toEqual('boxes');
  });
  it('returns null if no irregular noun is found', () => {
    expect(otherNouns('car')).toEqual(null);
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

describe('When testing standardNouns', () => {
  it('returns simple noun with s', () => {
    expect(standardNouns('car', 1)).toEqual('car');
    expect(standardNouns('car', 2)).toEqual('cars');
    expect(standardNouns('book', 1)).toEqual('book');
    expect(standardNouns('book', 2)).toEqual('books');
    expect(standardNouns('apple', 1)).toEqual('apple');
    expect(standardNouns('apple', 2)).toEqual('apples');
  });
});

describe('When testing usNouns', () => {
  it('returns i for nouns ending in us', () => {
    expect(usNouns('cactus', 1)).toEqual('cactus');
    expect(usNouns('cactus', 2)).toEqual('cacti');
    expect(usNouns('fungus', 1)).toEqual('fungus');
    expect(usNouns('fungus', 2)).toEqual('fungi');
    expect(usNouns('stimulus', 1)).toEqual('stimulus');
    expect(usNouns('stimulus', 2)).toEqual('stimuli');
    expect(usNouns('syllabus', 1)).toEqual('syllabus');
    expect(usNouns('syllabus', 2)).toEqual('syllabi');
  });
});

describe('When testing isNouns', () => {
  it('returns i for nouns ending in us', () => {
    expect(isNouns('analysis', 1)).toEqual('analysis');
    expect(isNouns('analysis', 2)).toEqual('analyses');
    expect(isNouns('basis', 1)).toEqual('basis');
    expect(isNouns('basis', 2)).toEqual('bases');
    expect(isNouns('crisis', 1)).toEqual('crisis');
    expect(isNouns('crisis', 2)).toEqual('crises');
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
