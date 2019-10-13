import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = (state) => {
  const { isMobile, searchIsActive } = state.app;
  return { isMobile, searchIsActive };
};

export default connect(mapStateToProps)(Header);
