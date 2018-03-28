import { connect } from 'react-redux';
import Form from './form';
import { withRouter } from 'react-router';

import { createProgram } from 'store/programs/actionCreators';
import { getSchoolProgramsUrl } from 'helpers/url';


const mapStateToProps = (state, ownProps) => {
  return {
    formScope: state.app.createProgramFormScope,
    onSuccess: (data) => ownProps.history.push(getSchoolProgramsUrl(data.code, data.year)),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProgram: (program) => dispatch(createProgram(program)),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form))

