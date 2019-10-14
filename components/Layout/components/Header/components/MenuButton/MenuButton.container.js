import { connect } from 'react-redux';
import { toggleMenu } from '../../../../../../store/actions';

import MenuButton from './MenuButton';

const actionCreators = { toggleMenu };

export default connect(null, actionCreators)(MenuButton);
