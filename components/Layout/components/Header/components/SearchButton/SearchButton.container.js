import { connect } from 'react-redux';
import SearchButton from './SearchButton';
import { toggleSearch } from '../../../../../../store/actions';

const mapStateToProps = (state) => {
  const { searchIsActive } = state.app;
  return { searchIsActive };
};

const actionCreators = { toggleSearch };

export default connect(mapStateToProps, actionCreators)(SearchButton);
