import { createAction } from 'redux-actions';

export const onLoadApp = createAction('ON_LOAD_APP');

export const toggleMenu = createAction('TOGGLE_MENU');
export const closeMenu = createAction('CLOSE_MENU');

export const checkIsMobile = createAction('CHECK_IS_MOBILE', isMobile => ({ isMobile }));

export const addToCart = createAction('ADD_TO_CART', (product, callback) => ({ product, callback }));

