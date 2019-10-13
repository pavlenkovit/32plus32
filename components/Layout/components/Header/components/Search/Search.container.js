import { connect } from 'react-redux';
import Search from './Search';
import { closeSearch } from '../../../../../../store/actions';

const actionCreators = { closeSearch };

export default connect(null, actionCreators)(Search);
