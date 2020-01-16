import { handleActions } from 'redux-actions';
import { isMobile } from 'react-device-detect';
import * as actions from '../actions';

export interface IAppState {
  isMobile: boolean;
  menuIsActive: boolean;
  searchIsActive: boolean;
}

const initial: IAppState = {
  isMobile,
  menuIsActive: false,
  searchIsActive: false,
};

export default handleActions({
  [actions.toggleMenu.toString()](state) {
    return {
      ...state,
      menuIsActive: !state.menuIsActive,
    };
  },

  [actions.closeMenu.toString()](state) {
    return {
      ...state,
      menuIsActive: false,
    };
  },

  [actions.toggleSearch.toString()](state) {
    return {
      ...state,
      searchIsActive: !state.searchIsActive,
    };
  },

  [actions.closeSearch.toString()](state) {
    return {
      ...state,
      searchIsActive: false,
    };
  },

}, initial);
