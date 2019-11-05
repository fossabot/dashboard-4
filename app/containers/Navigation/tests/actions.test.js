import { drawerOpen, drawerClose } from '../actions';
import { DRAWER_OPEN, DRAWER_CLOSE } from '../constants';

describe('Test actions', () => {
  describe('`DRAWER_OPEN` Action', () => {
    it('has a type of DRAWER_OPEN', () => {
      const expected = {
        type: DRAWER_OPEN,
      };
      expect(drawerOpen()).toEqual(expected);
    });
  });

  describe('`DRAWER_CLOSE` Action', () => {
    it('has a type of DRAWER_CLOSE', () => {
      const expected = {
        type: DRAWER_CLOSE,
      };
      expect(drawerClose()).toEqual(expected);
    });
  });
});
