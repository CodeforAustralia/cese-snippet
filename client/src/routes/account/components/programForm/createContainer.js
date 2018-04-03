import { connect } from 'react-redux';
import { createProgram } from 'store/programs/actionCreators';
import { selectSession } from "store/session/selectors";
import { selectSchools } from "store/schools/selectors";

const mapStateToProps = (state, ownProps) => {
  const { location } = ownProps;
  const session = selectSession(state);
  const schools = selectSchools(state, session.schools);
  const initialFormState = location.state && location.state.initialFormState || {};

  const newInitialFormState = {
    ...initialFormState,
    createdBy: session.id,
  };

  return {
    isEdit: false,
    initialFormState: newInitialFormState,

    getCodeOptions: () => schools.map(s => ({ value: s.code, label: s.name })),
    getYearLevelOptions: (code) => {
      const school = schools.find(s => s.code === code);
      if (!school) {
        return null;
      }
      return school.yearLevels.map((y) => ({ value: y, label: y }));
    }
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (values) => dispatch(createProgram(values)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
