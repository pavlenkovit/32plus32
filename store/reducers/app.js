import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initial = {
  isMobile: false,
  menuIsActive: false,
  searchIsActive: false,
};

export default handleActions({
  [actions.checkIsMobile](state, { payload }) {
    const { isMobile } = payload;
    return { ...state, isMobile };
  },

  [actions.toggleMenu](state) {
    return {
      ...state,
      menuIsActive: !state.menuIsActive,
    };
  },

  [actions.closeMenu](state) {
    return {
      ...state,
      menuIsActive: false,
    };
  },

  [actions.toggleSearch](state) {
    return {
      ...state,
      searchIsActive: !state.searchIsActive,
    };
  },

  [actions.closeSearch](state) {
    return {
      ...state,
      searchIsActive: false,
    };
  },

}, initial);
