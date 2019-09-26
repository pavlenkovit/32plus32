import { connect } from 'react-redux';
import { checkIsMobile } from '../../store/actions';

import Layout from './Layout';

const actionCreators = { checkIsMobile };

export default connect(null, actionCreators)(Layout);
