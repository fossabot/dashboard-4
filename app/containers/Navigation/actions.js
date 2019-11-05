/*
 *
 * Navigation actions
 *
 */

import { DRAWER_OPEN, DRAWER_CLOSE } from './constants';

/**
 * Open the header drawer.
 *
 * @return {object} An action object with a type of HEADER_OPEN
 */
export function drawerOpen() {
  return {
    type: DRAWER_OPEN,
  };
}

/**
 * Open the header drawer.
 *
 * @return {object} An action object with a type of HEADER_OPEN
 */
export function drawerClose() {
  return {
    type: DRAWER_CLOSE,
  };
}
