import { matchesRegex } from '../src/matchesRegex';

describe('When testing schshxzNoun', () => {
  it('returns the correct noun', () => {
    expect(matchesRegex('bus', '(s|ch|sh|x|z)$', 'es')).toEqual('buses');
    expect(matchesRegex('quiz', '(z)$', 'zes')).toEqual('quizzes');
    expect(matchesRegex('box', '(s|ch|sh|x|z)$', 'es')).toEqual('boxes');
  });
  it('returns null if no irregular noun is found', () => {
    expect(matchesRegex('car', '(s|ch|sh|x|z)$', 'es')).toEqual(null);
  });
});
