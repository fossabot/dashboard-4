import produce from 'immer';
import navigationReducer from '../reducer';
import { drawerOpen, drawerClose } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('testReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      drawer: {
        open: true,
      },
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(navigationReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the `drawerOpen` action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.drawer.open = true;
    });

    expect(navigationReducer(state, drawerOpen())).toEqual(expectedResult);
  });

  it('should handle the `drawerClose` action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.drawer.open = false;
    });

    expect(navigationReducer(state, drawerClose())).toEqual(expectedResult);
  });
});
