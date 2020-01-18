import { handleActions } from 'redux-actions';
import * as actions from '../actions';

export interface IAppState {
  menuIsActive: boolean;
  searchIsActive: boolean;
}

const initial: IAppState = {
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
