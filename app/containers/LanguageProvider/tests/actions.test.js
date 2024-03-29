import { changeLocale } from '../actions';

import { CHANGE_LOCALE } from '../constants';

describe('LanguageProvider actions', () => {
  describe('Change locale action', () => {
    it('has a type of CHANGE_LOCALE', () => {
      const expected = {
        type: CHANGE_LOCALE,
        locale: 'fr',
      };
      expect(changeLocale('fr')).toEqual(expected);
    });
  });
});
