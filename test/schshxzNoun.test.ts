import schshxzNoun from '../src/schshxzNoun';

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
