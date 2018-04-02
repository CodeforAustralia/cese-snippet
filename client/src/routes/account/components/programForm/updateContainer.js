import { connect } from 'react-redux';
import { updateProgram } from 'store/programs/actionCreators';
import { selectSession } from "store/session/selectors";
import { selectSchools } from "store/schools/selectors";

/*


  TODO - clone from createContainer.js


 */

const mapStateToProps = (state, ownProps) => {
  const { location } = ownProps;
  const session = selectSession(state);
  const schools = selectSchools(state, session.schools);
  const initialFormState = location.state && location.state.initialFormState || {};

  const newInitialFormState = {
    ...initialFormState,
    updatedBy: session.id,
  };

  return {
    isEdit: true,
    initialFormState: newInitialFormState,

    codeOptions: schools.map(s => ({ value: s.code, label: s.name })),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (values) => dispatch(updateProgram(values)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
