import tinyplural from '../src/index';
import { nonChangingNouns, irregularNouns } from '../src/data';

describe('When testing tinyplural', () => {
  it('throws error when string is not passed', () => {
    //@ts-expect-error testing for invalid input
    expect(tinyplural()).toEqual('');
  });
  it('returns the correct irregular noun', () => {
    expect(tinyplural('foot', 1)).toEqual('1 foot');
    expect(tinyplural('foot', 2)).toEqual('2 feet');
  });
  it('returns the cached result', () => {
    const resultOne = tinyplural('foot', 2);
    const resultTwo = tinyplural('foot', 2);
    expect(resultOne).toEqual('2 feet');
    expect(resultTwo).toEqual('2 feet');
    expect(resultOne).toBe(resultTwo);
  });
  it('returns the correct non-changing noun', () => {
    expect(tinyplural('fish', 1)).toEqual('1 fish');
    expect(tinyplural('fish', 2)).toEqual('2 fish');
  });
  it('returns the correct ON noun', () => {
    expect(tinyplural('phenomenon', 1)).toEqual('1 phenomenon');
    expect(tinyplural('phenomenon', 2)).toEqual('2 phenomena');
    expect(tinyplural('criterion', 1)).toEqual('1 criterion');
    expect(tinyplural('criterion', 2)).toEqual('2 criteria');
  });
  it('returns the correct constant + O noun', () => {
    expect(tinyplural('hero', 1)).toEqual('1 hero');
    expect(tinyplural('hero', 2)).toEqual('2 heroes');
    expect(tinyplural('tomato', 1)).toEqual('1 tomato');
    expect(tinyplural('tomato', 2)).toEqual('2 tomatoes');
  });
  it('returns the correct vowel + O noun', () => {
    expect(tinyplural('zoo', 1)).toEqual('1 zoo');
    expect(tinyplural('zoo', 2)).toEqual('2 zoos');
    expect(tinyplural('stereo', 1)).toEqual('1 stereo');
    expect(tinyplural('stereo', 2)).toEqual('2 stereos');
  });
  it('returns a noun with f or fe removed and ves added', () => {
    expect(tinyplural('leaf', 1)).toEqual('1 leaf');
    expect(tinyplural('leaf', 2)).toEqual('2 leaves');
    expect(tinyplural('knife', 1)).toEqual('1 knife');
    expect(tinyplural('knife', 2)).toEqual('2 knives');
    expect(tinyplural('roof', 1)).toEqual('1 roof');
    expect(tinyplural('roof', 2)).toEqual('2 roofs');
    expect(tinyplural('cliff', 1)).toEqual('1 cliff');
    expect(tinyplural('cliff', 2)).toEqual('2 cliffs');
  });
  it('returns simple nouns with s added', () => {
    expect(tinyplural('car', 1)).toEqual('1 car');
    expect(tinyplural('car', 2)).toEqual('2 cars');
    expect(tinyplural('book', 1)).toEqual('1 book');
    expect(tinyplural('book', 2)).toEqual('2 books');
    expect(tinyplural('apple', 1)).toEqual('1 apple');
    expect(tinyplural('apple', 2)).toEqual('2 apples');
    expect(tinyplural('house', 1)).toEqual('1 house');
    expect(tinyplural('house', 2)).toEqual('2 houses');
    expect(tinyplural('boat', 1)).toEqual('1 boat');
    expect(tinyplural('boat', 2)).toEqual('2 boats');
  });
  it('generic tests', () => {
    expect(tinyplural('penny', 1)).toEqual('1 penny');
    expect(tinyplural('penny', 2)).toEqual('2 pennies');
    expect(tinyplural('spy', 1)).toEqual('1 spy');
    expect(tinyplural('spy', 2)).toEqual('2 spies');
    expect(tinyplural('city', 1)).toEqual('1 city');
    expect(tinyplural('city', 3)).toEqual('3 cities');
    expect(tinyplural('daisy', 1)).toEqual('1 daisy');
    expect(tinyplural('daisy', 100)).toEqual('100 daisies');
    expect(tinyplural('tooth', 1)).toEqual('1 tooth');
    expect(tinyplural('tooth', 100)).toEqual('100 teeth');
    expect(tinyplural('half', 1)).toEqual('1 half');
    expect(tinyplural('half', 2)).toEqual('2 halves');
    expect(tinyplural('life', 1)).toEqual('1 life');
    expect(tinyplural('life', 2)).toEqual('2 lives');
    expect(tinyplural('elf', 1)).toEqual('1 elf');
    expect(tinyplural('elf', 5)).toEqual('5 elves');
    expect(tinyplural('loaf', 1)).toEqual('1 loaf');
    expect(tinyplural('loaf', 5)).toEqual('5 loaves');
    expect(tinyplural('potato', 1)).toEqual('1 potato');
    expect(tinyplural('potato', 5)).toEqual('5 potatoes');
    expect(tinyplural('tomato', 1)).toEqual('1 tomato');
    expect(tinyplural('tomato', 5)).toEqual('5 tomatoes');
    expect(tinyplural('bus', 1)).toEqual('1 bus');
    expect(tinyplural('bus', 2)).toEqual('2 buses');
    expect(tinyplural('quiz', 1)).toEqual('1 quiz');
    expect(tinyplural('quiz', 2)).toEqual('2 quizzes');
    expect(tinyplural('box', 1)).toEqual('1 box');
    expect(tinyplural('box', 2)).toEqual('2 boxes');
    expect(tinyplural('tax', 1)).toEqual('1 tax');
    expect(tinyplural('tax', 2)).toEqual('2 taxes');
    expect(tinyplural('contributor', 1)).toEqual('1 contributor');
    expect(tinyplural('contributor', 2)).toEqual('2 contributors');
    expect(tinyplural('guide', 1)).toEqual('1 guide');
    expect(tinyplural('guide', 2)).toEqual('2 guides');
  });
  it('odd us and is nouns', () => {
    expect(tinyplural('cactus', 1)).toEqual('1 cactus');
    expect(tinyplural('cactus', 2)).toEqual('2 cactuses');
    expect(tinyplural('fungus', 1)).toEqual('1 fungus');
    expect(tinyplural('fungus', 2)).toEqual('2 funguses');
    expect(tinyplural('stimulus', 1)).toEqual('1 stimulus');
    expect(tinyplural('stimulus', 2)).toEqual('2 stimuluses');
    expect(tinyplural('syllabus', 1)).toEqual('1 syllabus');
    expect(tinyplural('syllabus', 2)).toEqual('2 syllabuses');
    expect(tinyplural('analysis', 1)).toEqual('1 analysis');
    expect(tinyplural('analysis', 2)).toEqual('2 analyses');
    expect(tinyplural('basis', 1)).toEqual('1 basis');
    expect(tinyplural('basis', 2)).toEqual('2 bases');
    expect(tinyplural('crisis', 1)).toEqual('1 crisis');
    expect(tinyplural('crisis', 2)).toEqual('2 crises');
  });
  it('checking for 0 count returns plural', () => {
    expect(tinyplural('cactus', 0)).toEqual('0 cactuses');
    expect(tinyplural('fungus', 0)).toEqual('0 funguses');
    expect(tinyplural('stimulus', 0)).toEqual('0 stimuluses');
    expect(tinyplural('syllabus', 0)).toEqual('0 syllabuses');
    expect(tinyplural('analysis', 0)).toEqual('0 analyses');
    expect(tinyplural('basis', 0)).toEqual('0 bases');
    expect(tinyplural('crisis', 0)).toEqual('0 crises');
    expect(tinyplural('day', 0)).toEqual('0 days');
    expect(tinyplural('week', 0)).toEqual('0 weeks');
    expect(tinyplural('quiz', 0)).toEqual('0 quizzes');
    expect(tinyplural('deer', 0)).toEqual('0 deer');
    expect(tinyplural('aircraft', 0)).toEqual('0 aircraft');
    expect(tinyplural('hero', 0)).toEqual('0 heroes');
    expect(tinyplural('baby', 0)).toEqual('0 babies');
    expect(tinyplural('man', 0)).toEqual('0 men');
  });
  it('returns the same casing', () => {
    expect(tinyplural('Foot', 1)).toEqual('1 Foot');
  });

  describe('When negative values', () => {
    it('returns i for nouns ending in us', () => {
      expect(tinyplural('bin', -1)).toEqual('-1 bins');
    });
  });

  describe('Checking data arrays for duplicates', () => {
    it('nonChangingNouns', () => {
      expect(new Set(nonChangingNouns).size !== nonChangingNouns.length).toBe(
        false
      );
    });
    it('irregularNouns', () => {
      const uniqueValues = new Set(irregularNouns.map((item) => item.single));
      expect(uniqueValues.size < irregularNouns.length).toBe(false);
    });
  });
});
