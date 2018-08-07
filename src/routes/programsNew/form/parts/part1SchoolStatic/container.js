import { connect } from 'react-redux';

import { selectSchool } from 'store/schools/selectors';


const mapStateToProps = (state, ownProps) => {
  const { schoolCode } = ownProps;
  return {
    school: selectSchool(state, schoolCode),
  };
};

export default connect(mapStateToProps);
