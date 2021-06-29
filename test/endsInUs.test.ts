import endsInUs from '../src/endsInUs';

describe('When testing endsInUs', () => {
  it('returns i for nouns ending in us', () => {
    expect(endsInUs('cactus')).toEqual('cacti');
    expect(endsInUs('fungus')).toEqual('fungi');
    expect(endsInUs('stimulus')).toEqual('stimuli');
    expect(endsInUs('syllabus')).toEqual('syllabi');
  });
});
