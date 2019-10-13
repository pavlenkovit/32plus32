import { connect } from 'react-redux';
import { toggleMenu, closeMenu } from '../../../../../../store/actions';

import MenuButton from './MenuButton';

const mapStateToProps = (state) => {
  const { menuIsActive } = state.app;
  return { menuIsActive };
};

const actionCreators = { toggleMenu, closeMenu };

export default connect(mapStateToProps, actionCreators)(MenuButton);
