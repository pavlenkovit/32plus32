import { createAction } from 'redux-actions';

export const toggleMenu = createAction('TOGGLE_MENU');
export const closeMenu = createAction('CLOSE_MENU');

export const checkIsMobile = createAction('CHECK_IS_MOBILE', isMobile => ({ isMobile }));

export const toggleSearch = createAction('TOGGLE_SEARCH');
export const closeSearch = createAction('CLOSE_SEARCH');
