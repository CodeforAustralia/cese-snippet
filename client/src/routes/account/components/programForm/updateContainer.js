import { connect } from 'react-redux';
import { updateProgram } from 'store/programs/actionCreators';
import { selectSession } from "store/session/selectors";
import { selectSchool } from "store/schools/selectors";
import { selectStatic } from "store/static/selectors";


/*


  TODO - clone from createContainer.js


  todo - program template


 */

const mapStateToProps = (state, ownProps) => {
  const { location } = ownProps;
  const { code, year } = location.state.initialFormState;

  const staticData = selectStatic(state);
  const session = selectSession(state);
  const school = selectSchool(state, code);

  const initialFormState = location.state && location.state.initialFormState || {};

  const codeOptions =[{ value: code, label: school.name }];

  const newInitialFormState = {
    ...initialFormState,
    updatedBy: session.id,
  };

  if (typeof newInitialFormState.code === 'undefined' && codeOptions.length === 1) {
    newInitialFormState.code = codeOptions[0].value;
  }

  return {
    staticData,
    isEdit: true,
    initialFormState: newInitialFormState,

    codeOptions,
    getYearLevelsOptions: (code) => {
      return school.yearLevels.map((y) => ({ value: y, label: y }));
    },
    year,
    getTermsOptions: () => {
      return [
        { value: '1', label: `T1 - ${year}` },
        { value: '2', label: `T2 - ${year}` },
        { value: '3', label: `T3 - ${year}` },
        { value: '4', label: `T4 - ${year}` },
      ]
    }
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (values) => dispatch(updateProgram(values)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
