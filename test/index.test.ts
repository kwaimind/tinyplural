import makeSuffix, {
  endsInO,
  endsInY,
  endsInFOrFe,
  schshxzNoun,
} from '../src/index';
import nonChangingNouns from '../src/data/nonChangingNouns';
import irregularNouns from '../src/data/irregularNouns';
import isIregular from '../src/isIregular';
import standardNoun from '../src/standardNoun';
import isNonChanging from '../src/isNonChanging';
import endsInIs from '../src/endsInIs';
import endsInUs from '../src/endsInUs';

let randomCount: number;

beforeAll(() => {
  randomCount = Math.floor(Math.random() * 100) + 1;
});

describe('When testing makeSuffix', () => {
  it('throws error when string is not passed', () => {
    //@ts-ignore
    expect(() => makeSuffix()).toThrow(TypeError);
    //@ts-ignore
    expect(() => makeSuffix()).toThrow('expected a string');
    //@ts-ignore
    expect(() => makeSuffix(123)).toThrow('expected a string');
    //@ts-ignore
    expect(() => makeSuffix(null, 123)).toThrow('expected a string');
  });
  it('returns the correct irregular noun', () => {
    expect(makeSuffix('foot', 1)).toEqual('1 foot');
    expect(makeSuffix('foot', randomCount)).toEqual(`${randomCount} feet`);
  });
  it('returns the cached result', () => {
    const resultOne = makeSuffix('foot', 2);
    const resultTwo = makeSuffix('foot', 2);
    expect(resultOne).toEqual('2 feet');
    expect(resultTwo).toEqual('2 feet');
    expect(resultOne).toBe(resultTwo);
  });
  it('returns the correct non-changing noun', () => {
    expect(makeSuffix('fish', 1)).toEqual('1 fish');
    expect(makeSuffix('fish', randomCount)).toEqual(`${randomCount} fish`);
  });
  it('returns the correct ON noun', () => {
    expect(makeSuffix('phenomenon', 1)).toEqual('1 phenomenon');
    expect(makeSuffix('phenomenon', randomCount)).toEqual(
      `${randomCount} phenomena`
    );
    expect(makeSuffix('criterion', 1)).toEqual('1 criterion');
    expect(makeSuffix('criterion', randomCount)).toEqual(
      `${randomCount} criteria`
    );
  });
  it('returns the correct constant + O noun', () => {
    expect(makeSuffix('hero', 1)).toEqual('1 hero');
    expect(makeSuffix('hero', randomCount)).toEqual(`${randomCount} heroes`);
    expect(makeSuffix('tomato', 1)).toEqual('1 tomato');
    expect(makeSuffix('tomato', randomCount)).toEqual(
      `${randomCount} tomatoes`
    );
  });
  it('returns the correct vowel + O noun', () => {
    expect(makeSuffix('zoo', 1)).toEqual('1 zoo');
    expect(makeSuffix('zoo', randomCount)).toEqual(`${randomCount} zoos`);
    expect(makeSuffix('stereo', 1)).toEqual('1 stereo');
    expect(makeSuffix('stereo', randomCount)).toEqual(`${randomCount} stereos`);
  });
  it('returns a noun with f or fe removed and ves added', () => {
    expect(makeSuffix('leaf')).toEqual('1 leaf');
    expect(makeSuffix('leaf', randomCount)).toEqual(`${randomCount} leaves`);
    expect(makeSuffix('knife')).toEqual('1 knife');
    expect(makeSuffix('knife', randomCount)).toEqual(`${randomCount} knives`);
    expect(makeSuffix('roof')).toEqual('1 roof');
    expect(makeSuffix('roof', randomCount)).toEqual(`${randomCount} roofs`);
    expect(makeSuffix('cliff')).toEqual('1 cliff');
    expect(makeSuffix('cliff', randomCount)).toEqual(`${randomCount} cliffs`);
  });
  it('returns simple nouns with s added', () => {
    expect(makeSuffix('car', 1)).toEqual('1 car');
    expect(makeSuffix('car', randomCount)).toEqual(`${randomCount} cars`);
    expect(makeSuffix('book', 1)).toEqual('1 book');
    expect(makeSuffix('book', randomCount)).toEqual(`${randomCount} books`);
    expect(makeSuffix('apple', 1)).toEqual('1 apple');
    expect(makeSuffix('apple', randomCount)).toEqual(`${randomCount} apples`);
    expect(makeSuffix('house', 1)).toEqual('1 house');
    expect(makeSuffix('house', randomCount)).toEqual(`${randomCount} houses`);
    expect(makeSuffix('boat', 1)).toEqual('1 boat');
    expect(makeSuffix('boat', randomCount)).toEqual(`${randomCount} boats`);
  });
  it('generic tests', () => {
    expect(makeSuffix('penny', 1)).toEqual('1 penny');
    expect(makeSuffix('penny', randomCount)).toEqual(`${randomCount} pennies`);
    expect(makeSuffix('spy', 1)).toEqual('1 spy');
    expect(makeSuffix('spy', randomCount)).toEqual(`${randomCount} spies`);
    expect(makeSuffix('city', 1)).toEqual('1 city');
    expect(makeSuffix('city', 3)).toEqual('3 cities');
    expect(makeSuffix('daisy', 1)).toEqual('1 daisy');
    expect(makeSuffix('daisy', 100)).toEqual('100 daisies');
    expect(makeSuffix('tooth', 1)).toEqual('1 tooth');
    expect(makeSuffix('tooth', 100)).toEqual('100 teeth');
    expect(makeSuffix('half', 1)).toEqual('1 half');
    expect(makeSuffix('half', randomCount)).toEqual(`${randomCount} halves`);
    expect(makeSuffix('life', 1)).toEqual('1 life');
    expect(makeSuffix('life', randomCount)).toEqual(`${randomCount} lives`);
    expect(makeSuffix('elf', 1)).toEqual('1 elf');
    expect(makeSuffix('elf', 5)).toEqual('5 elves');
    expect(makeSuffix('loaf', 1)).toEqual('1 loaf');
    expect(makeSuffix('loaf', 5)).toEqual('5 loaves');
    expect(makeSuffix('potato', 1)).toEqual('1 potato');
    expect(makeSuffix('potato', 5)).toEqual('5 potatoes');
    expect(makeSuffix('tomato', 1)).toEqual('1 tomato');
    expect(makeSuffix('tomato', 5)).toEqual('5 tomatoes');
    expect(makeSuffix('bus', 1)).toEqual('1 bus');
    expect(makeSuffix('bus', randomCount)).toEqual(`${randomCount} buses`);
    expect(makeSuffix('quiz', 1)).toEqual('1 quiz');
    expect(makeSuffix('quiz', randomCount)).toEqual(`${randomCount} quizzes`);
    expect(makeSuffix('box', 1)).toEqual('1 box');
    expect(makeSuffix('box', randomCount)).toEqual(`${randomCount} boxes`);
    expect(makeSuffix('tax', 1)).toEqual('1 tax');
    expect(makeSuffix('tax', randomCount)).toEqual(`${randomCount} taxes`);
    expect(makeSuffix('contributor', randomCount)).toEqual(
      `${randomCount} contributors`
    );
    expect(makeSuffix('guide', randomCount)).toEqual(`${randomCount} guides`);
  });
  it('odd us and is nouns', () => {
    expect(makeSuffix('cactus', 1)).toEqual('1 cactus');
    expect(makeSuffix('cactus', randomCount)).toEqual(
      `${randomCount} cactuses`
    );
    expect(makeSuffix('fungus', 1)).toEqual('1 fungus');
    expect(makeSuffix('fungus', randomCount)).toEqual(
      `${randomCount} funguses`
    );
    expect(makeSuffix('stimulus', 1)).toEqual('1 stimulus');
    expect(makeSuffix('stimulus', randomCount)).toEqual(
      `${randomCount} stimuluses`
    );
    expect(makeSuffix('syllabus', 1)).toEqual('1 syllabus');
    expect(makeSuffix('syllabus', randomCount)).toEqual(
      `${randomCount} syllabuses`
    );
    expect(makeSuffix('analysis', 1)).toEqual('1 analysis');
    expect(makeSuffix('analysis', randomCount)).toEqual(
      `${randomCount} analyses`
    );
    expect(makeSuffix('basis', 1)).toEqual('1 basis');
    expect(makeSuffix('basis', randomCount)).toEqual(`${randomCount} bases`);
    expect(makeSuffix('crisis', 1)).toEqual('1 crisis');
    expect(makeSuffix('crisis', randomCount)).toEqual(`${randomCount} crises`);
  });
  it('checking for 0 count returns plural', () => {
    expect(makeSuffix('cactus', 0)).toEqual('0 cactuses');
    expect(makeSuffix('fungus', 0)).toEqual('0 funguses');
    expect(makeSuffix('stimulus', 0)).toEqual('0 stimuluses');
    expect(makeSuffix('syllabus', 0)).toEqual('0 syllabuses');
    expect(makeSuffix('analysis', 0)).toEqual('0 analyses');
    expect(makeSuffix('basis', 0)).toEqual('0 bases');
    expect(makeSuffix('crisis', 0)).toEqual('0 crises');
    expect(makeSuffix('day', 0)).toEqual('0 days');
    expect(makeSuffix('week', 0)).toEqual('0 weeks');
    expect(makeSuffix('quiz', 0)).toEqual('0 quizzes');
    expect(makeSuffix('deer', 0)).toEqual('0 deer');
    expect(makeSuffix('aircraft', 0)).toEqual('0 aircraft');
    expect(makeSuffix('hero', 0)).toEqual('0 heroes');
    expect(makeSuffix('baby', 0)).toEqual('0 babies');
    expect(makeSuffix('man', 0)).toEqual('0 men');
  });
  it('returns the same casing', () => {
    expect(makeSuffix('Foot', 1)).toEqual('1 Foot');
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

describe('When testing schshxzNoun', () => {
  it('returns the correct noun', () => {
    expect(schshxzNoun('bus')).toEqual('buses');
    expect(schshxzNoun('quiz')).toEqual('quizzes');
    expect(schshxzNoun('box')).toEqual('boxes');
  });
  it('returns null if no irregular noun is found', () => {
    expect(schshxzNoun('car')).toEqual(null);
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

describe('When testing standardNoun', () => {
  it('returns simple noun with s', () => {
    expect(standardNoun('car')).toEqual('cars');
    expect(standardNoun('book')).toEqual('books');
    expect(standardNoun('apple')).toEqual('apples');
  });
});

describe('When testing endsInUs', () => {
  it('returns i for nouns ending in us', () => {
    expect(endsInUs('cactus')).toEqual('cacti');
    expect(endsInUs('fungus')).toEqual('fungi');
    expect(endsInUs('stimulus')).toEqual('stimuli');
    expect(endsInUs('syllabus')).toEqual('syllabi');
  });
});

describe('When testing endsInIs', () => {
  it('returns i for nouns ending in us', () => {
    expect(endsInIs('analysis')).toEqual('analyses');
    expect(endsInIs('basis')).toEqual('bases');
    expect(endsInIs('crisis')).toEqual('crises');
  });
});

describe('When negative values', () => {
  it('returns i for nouns ending in us', () => {
    expect(makeSuffix('bin', -1)).toEqual('-1 bins');
  });
});

describe('Checking data arrays for duplicates', () => {
  it('nonChangingNouns', () => {
    expect(new Set(nonChangingNouns).size !== nonChangingNouns.length).toBe(
      false
    );
  });
  it('irregularNouns', () => {
    const uniqueValues = new Set(irregularNouns.map(item => item.single));
    expect(uniqueValues.size < irregularNouns.length).toBe(false);
  });
});
