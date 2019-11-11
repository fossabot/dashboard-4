import { drawerOpen, drawerClose } from '../actions';
import { DRAWER_OPEN, DRAWER_CLOSE } from '../constants';

describe('Test actions', () => {
  describe('Drawer open action', () => {
    it('has a type of DRAWER_OPEN', () => {
      const expected = {
        type: DRAWER_OPEN,
      };
      expect(drawerOpen()).toEqual(expected);
    });
  });

  describe('Drawer close action', () => {
    it('has a type of DRAWER_CLOSE', () => {
      const expected = {
        type: DRAWER_CLOSE,
      };
      expect(drawerClose()).toEqual(expected);
    });
  });
});
