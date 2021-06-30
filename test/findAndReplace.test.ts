import findAndReplace from '../src/findAndReplace';

describe('When testing findAndReplace', () => {
  it('for nouns ending in is', () => {
    expect(findAndReplace('analysis', 'is', 'es')).toEqual('analyses');
    expect(findAndReplace('basis', 'is', 'es')).toEqual('bases');
    expect(findAndReplace('crisis', 'is', 'es')).toEqual('crises');
  });
  it('for nouns ending in us', () => {
    expect(findAndReplace('cactus', 'us', 'i')).toEqual('cacti');
    expect(findAndReplace('fungus', 'us', 'i')).toEqual('fungi');
    expect(findAndReplace('stimulus', 'us', 'i')).toEqual('stimuli');
    expect(findAndReplace('syllabus', 'us', 'i')).toEqual('syllabi');
  });
});
