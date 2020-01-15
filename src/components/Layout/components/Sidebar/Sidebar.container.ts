import { connect } from 'react-redux';
import Sidebar from './Sidebar';

const mapStateToProps = (state: any) => {
  const { isMobile } = state.app;
  return { isMobile };
};

export default connect(mapStateToProps)(Sidebar);
