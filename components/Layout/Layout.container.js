import { connect } from 'react-redux';
import { checkIsMobile } from '../../store/actions';

import Layout from './Layout';

const mapStateToProps = (state) => {
  const { isMobile } = state.app;
  return { isMobile };
};

const actionCreators = { checkIsMobile };

export default connect(mapStateToProps, actionCreators)(Layout);
