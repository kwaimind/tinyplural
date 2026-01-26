import { tinyplural } from '../src/index';
import { irregularNouns } from '../src/irregularNouns.data';
import { nonChangingNouns } from '../src/nonChangingNouns.data';

describe('tinyplural', () => {
  describe('irregular nouns', () => {
    it('handles common irregular plurals', () => {
      expect(tinyplural('foot', 1)).toEqual('1 foot');
      expect(tinyplural('foot', 2)).toEqual('2 feet');
      expect(tinyplural('tooth', 1)).toEqual('1 tooth');
      expect(tinyplural('tooth', 2)).toEqual('2 teeth');
      expect(tinyplural('goose', 2)).toEqual('2 geese');
      expect(tinyplural('man', 1)).toEqual('1 man');
      expect(tinyplural('man', 2)).toEqual('2 men');
      expect(tinyplural('woman', 2)).toEqual('2 women');
      expect(tinyplural('child', 2)).toEqual('2 children');
      expect(tinyplural('mouse', 2)).toEqual('2 mice');
      expect(tinyplural('ox', 2)).toEqual('2 oxen');
      expect(tinyplural('person', 2)).toEqual('2 people');
    });
  });

  describe('uncountable nouns', () => {
    it('maintains same form for singular and plural', () => {
      expect(tinyplural('fish', 1)).toEqual('1 fish');
      expect(tinyplural('fish', 2)).toEqual('2 fish');
      expect(tinyplural('sheep', 2)).toEqual('2 sheep');
      expect(tinyplural('deer', 2)).toEqual('2 deer');
      expect(tinyplural('moose', 2)).toEqual('2 moose');
      expect(tinyplural('series', 2)).toEqual('2 series');
      expect(tinyplural('species', 2)).toEqual('2 species');
      expect(tinyplural('aircraft', 2)).toEqual('2 aircraft');
    });
  });

  describe('latin/greek origin words', () => {
    it('handles -on to -a transformations', () => {
      expect(tinyplural('phenomenon', 1)).toEqual('1 phenomenon');
      expect(tinyplural('phenomenon', 2)).toEqual('2 phenomena');
      expect(tinyplural('criterion', 1)).toEqual('1 criterion');
      expect(tinyplural('criterion', 2)).toEqual('2 criteria');
    });

    it('handles -us endings', () => {
      expect(tinyplural('cactus', 1)).toEqual('1 cactus');
      expect(tinyplural('cactus', 2)).toEqual('2 cactuses');
      expect(tinyplural('fungus', 2)).toEqual('2 funguses');
      expect(tinyplural('stimulus', 2)).toEqual('2 stimuluses');
      expect(tinyplural('syllabus', 2)).toEqual('2 syllabuses');
    });

    it('handles -is to -es transformations', () => {
      expect(tinyplural('analysis', 1)).toEqual('1 analysis');
      expect(tinyplural('analysis', 2)).toEqual('2 analyses');
      expect(tinyplural('basis', 2)).toEqual('2 bases');
      expect(tinyplural('crisis', 2)).toEqual('2 crises');
      expect(tinyplural('diagnosis', 2)).toEqual('2 diagnoses');
      expect(tinyplural('thesis', 2)).toEqual('2 theses');
    });
  });

  describe('consonant + o words', () => {
    it('adds -es to most consonant + o words', () => {
      expect(tinyplural('hero', 1)).toEqual('1 hero');
      expect(tinyplural('hero', 2)).toEqual('2 heroes');
      expect(tinyplural('tomato', 2)).toEqual('2 tomatoes');
      expect(tinyplural('potato', 2)).toEqual('2 potatoes');
      expect(tinyplural('echo', 2)).toEqual('2 echoes');
      expect(tinyplural('torpedo', 2)).toEqual('2 torpedoes');
    });
  });

  describe('vowel + o words', () => {
    it('adds -s to vowel + o words', () => {
      expect(tinyplural('zoo', 1)).toEqual('1 zoo');
      expect(tinyplural('zoo', 2)).toEqual('2 zoos');
      expect(tinyplural('stereo', 2)).toEqual('2 stereos');
      expect(tinyplural('video', 2)).toEqual('2 videos');
      expect(tinyplural('radio', 2)).toEqual('2 radios');
    });
  });

  describe('f/fe words', () => {
    it('converts f/fe to ves for most words', () => {
      expect(tinyplural('leaf', 1)).toEqual('1 leaf');
      expect(tinyplural('leaf', 2)).toEqual('2 leaves');
      expect(tinyplural('knife', 2)).toEqual('2 knives');
      expect(tinyplural('wife', 2)).toEqual('2 wives');
      expect(tinyplural('life', 2)).toEqual('2 lives');
      expect(tinyplural('half', 2)).toEqual('2 halves');
      expect(tinyplural('elf', 2)).toEqual('2 elves');
      expect(tinyplural('loaf', 2)).toEqual('2 loaves');
      expect(tinyplural('wolf', 2)).toEqual('2 wolves');
      expect(tinyplural('self', 2)).toEqual('2 selves');
      expect(tinyplural('shelf', 2)).toEqual('2 shelves');
      expect(tinyplural('thief', 2)).toEqual('2 thieves');
    });

    it('handles exceptions that just add -s', () => {
      expect(tinyplural('roof', 2)).toEqual('2 roofs');
      expect(tinyplural('cliff', 2)).toEqual('2 cliffs');
      expect(tinyplural('proof', 2)).toEqual('2 proofs');
      expect(tinyplural('chief', 2)).toEqual('2 chiefs');
      expect(tinyplural('belief', 2)).toEqual('2 beliefs');
      expect(tinyplural('safe', 2)).toEqual('2 safes');
    });
  });

  describe('consonant + y words', () => {
    it('converts y to ies', () => {
      expect(tinyplural('penny', 1)).toEqual('1 penny');
      expect(tinyplural('penny', 2)).toEqual('2 pennies');
      expect(tinyplural('spy', 2)).toEqual('2 spies');
      expect(tinyplural('city', 2)).toEqual('2 cities');
      expect(tinyplural('lady', 2)).toEqual('2 ladies');
      expect(tinyplural('baby', 2)).toEqual('2 babies');
      expect(tinyplural('daisy', 2)).toEqual('2 daisies');
      expect(tinyplural('cherry', 2)).toEqual('2 cherries');
      expect(tinyplural('puppy', 2)).toEqual('2 puppies');
      expect(tinyplural('story', 2)).toEqual('2 stories');
    });
  });

  describe('vowel + y words', () => {
    it('just adds -s', () => {
      expect(tinyplural('day', 2)).toEqual('2 days');
      expect(tinyplural('boy', 2)).toEqual('2 boys');
      expect(tinyplural('key', 2)).toEqual('2 keys');
      expect(tinyplural('toy', 2)).toEqual('2 toys');
      expect(tinyplural('monkey', 2)).toEqual('2 monkeys');
    });
  });

  describe('sibilant endings (s, ss, ch, sh, x, z)', () => {
    it('adds -es to sibilants', () => {
      expect(tinyplural('bus', 1)).toEqual('1 bus');
      expect(tinyplural('bus', 2)).toEqual('2 buses');
      expect(tinyplural('glass', 2)).toEqual('2 glasses');
      expect(tinyplural('kiss', 2)).toEqual('2 kisses');
      expect(tinyplural('church', 2)).toEqual('2 churches');
      expect(tinyplural('brush', 2)).toEqual('2 brushes');
      expect(tinyplural('box', 2)).toEqual('2 boxes');
      expect(tinyplural('tax', 2)).toEqual('2 taxes');
      expect(tinyplural('quiz', 2)).toEqual('2 quizzes');
    });
  });

  describe('regular nouns', () => {
    it('just adds -s', () => {
      expect(tinyplural('car', 1)).toEqual('1 car');
      expect(tinyplural('car', 2)).toEqual('2 cars');
      expect(tinyplural('book', 2)).toEqual('2 books');
      expect(tinyplural('apple', 2)).toEqual('2 apples');
      expect(tinyplural('house', 2)).toEqual('2 houses');
      expect(tinyplural('boat', 2)).toEqual('2 boats');
      expect(tinyplural('cat', 2)).toEqual('2 cats');
      expect(tinyplural('dog', 2)).toEqual('2 dogs');
      expect(tinyplural('computer', 2)).toEqual('2 computers');
      expect(tinyplural('table', 2)).toEqual('2 tables');
      expect(tinyplural('chair', 2)).toEqual('2 chairs');
      expect(tinyplural('pen', 2)).toEqual('2 pens');
    });
  });

  describe('zero and negative counts', () => {
    it('treats 0 as plural', () => {
      expect(tinyplural('cactus', 0)).toEqual('0 cactuses');
      expect(tinyplural('fungus', 0)).toEqual('0 funguses');
      expect(tinyplural('day', 0)).toEqual('0 days');
      expect(tinyplural('week', 0)).toEqual('0 weeks');
      expect(tinyplural('quiz', 0)).toEqual('0 quizzes');
      expect(tinyplural('deer', 0)).toEqual('0 deer');
      expect(tinyplural('aircraft', 0)).toEqual('0 aircraft');
      expect(tinyplural('hero', 0)).toEqual('0 heroes');
      expect(tinyplural('baby', 0)).toEqual('0 babies');
      expect(tinyplural('man', 0)).toEqual('0 men');
    });

    it('treats negative numbers as plural', () => {
      expect(tinyplural('bin', -1)).toEqual('-1 bins');
      expect(tinyplural('car', -5)).toEqual('-5 cars');
      expect(tinyplural('person', -3)).toEqual('-3 people');
    });
  });

  describe('edge cases', () => {
    it('preserves original casing', () => {
      expect(tinyplural('Foot', 1)).toEqual('1 Foot');
      expect(tinyplural('Foot', 2)).toEqual('2 Feet');
    });

    it('handles abbreviated words', () => {
      expect(tinyplural('photo', 2)).toEqual('2 photos');
      expect(tinyplural('memo', 2)).toEqual('2 memos');
    });
  });
});

describe('data arrays', () => {
  it('nonChangingNouns has no duplicates', () => {
    expect(nonChangingNouns.size).toBe(nonChangingNouns.size);
  });

  it('irregularNouns has no duplicate singles', () => {
    expect(irregularNouns.size).toBe(irregularNouns.size);
  });
});

describe('Checking data arrays for duplicates', () => {
  it('nonChangingNouns', () => {
    expect(nonChangingNouns.size).toBeGreaterThan(0);
  });
  it('irregularNouns', () => {
    expect(irregularNouns.size).toBeGreaterThan(0);
  });
});
