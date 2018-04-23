import { connect } from 'react-redux';

import { selectSchools } from 'store/schools/selectors';


const mapStateToProps = (state, ownProps) => {
  return {
    schools: selectSchools(state, ownProps.schoolCodes),
  }
};

export default connect(mapStateToProps);
