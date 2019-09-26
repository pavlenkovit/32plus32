import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = (state) => {
  const { isMobile } = state.app;
  return { isMobile };
};

export default connect(mapStateToProps)(Header);
