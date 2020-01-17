import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import { IState } from '../../../../store/reducers';

const mapStateToProps = (state: IState) => {
  const { isMobile } = state.app;
  return { isMobile };
};

export default connect(mapStateToProps)(Sidebar);
