import { handleActions } from 'redux-actions';
import * as actions from '../actions';
import { isMobile } from "react-device-detect";

const initial = {
  isMobile: isMobile,
  menuIsActive: false,
  searchIsActive: false,
};

export default handleActions({
  [actions.checkIsMobile](state, { payload }) {
    // const { isMobile } = payload;
    // return { ...state, isMobile };
    return state;
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
