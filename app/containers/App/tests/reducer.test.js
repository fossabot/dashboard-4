import globalReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('testReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      // currently nothing
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(globalReducer(undefined, {})).toEqual(expectedResult);
  });
});
