import { connect } from 'react-redux';
import { closeMenu } from '../../../../store/actions';

import MobileMenu from './MobileMenu';

const mapStateToProps = (state) => {
  const { menuIsActive } = state.app;
  return { menuIsActive };
};

const actionCreators = { closeMenu };

export default connect(mapStateToProps, actionCreators)(MobileMenu);
