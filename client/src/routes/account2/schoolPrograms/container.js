import { connect } from 'react-redux';
import { fetchSchool } from "store/schools/actionCreators";
import {
  selectSchool,
  selectIsFetching
} from "store/schools/selectors";

const mapStateToProps = (state, ownProps) => {
  const { code } = ownProps.match.params;
  return {
    isFetching: selectIsFetching(state),
    school: selectSchool(state, code),
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { code } = ownProps.match.params;
  return {
    fetchSchool: () => dispatch(fetchSchool(code)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
