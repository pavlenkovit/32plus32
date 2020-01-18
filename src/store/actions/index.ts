import { createAction } from 'redux-actions';

export const toggleMenu = createAction('TOGGLE_MENU');
export const closeMenu = createAction('CLOSE_MENU');

export const toggleSearch = createAction('TOGGLE_SEARCH');
export const closeSearch = createAction('CLOSE_SEARCH');
