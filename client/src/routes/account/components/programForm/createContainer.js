import { connect } from 'react-redux';
import { createProgram } from 'store/programs/actionCreators';
import { fetchProgramTemplates } from 'store/programTemplates/actionCreators';
import {
  selectIsFetching as selectIsFetchingProgramTemplates,
  selectProgramTemplate,
  selectProgramTemplates
} from 'store/programTemplates/selectors';
import { selectSession } from "store/session/selectors";
import { selectSchools } from "store/schools/selectors";
import { selectStatic } from "store/static/selectors";
import { getYear } from 'utils/formatDate';

const mapStateToProps = (state, ownProps) => {
  const { location } = ownProps;
  const staticData = selectStatic(state);
  const session = selectSession(state);
  const schools = selectSchools(state, session.schools);
  const initialFormState = location.state && location.state.initialFormState || {};
  const year = location.state && location.state.year || getYear();

  const codeOptions = schools.map(s => ({ value: s.code, label: s.name }));

  const newInitialFormState = {
    ...initialFormState,
    createdBy: session.id,
  };

  if (typeof newInitialFormState.code === 'undefined' && codeOptions.length === 1) {
    newInitialFormState.code = codeOptions[0].value;
  }

  return {
    staticData,

    programTemplates: selectProgramTemplates(state),
    isFetchingProgramTemplates: selectIsFetchingProgramTemplates(state),
    selectProgramTemplate: (id) => selectProgramTemplate(state, id),

    isEdit: false,
    initialFormState: newInitialFormState,

    codeOptions,
    getYearLevelsOptions: (code) => {
      const school = schools.find(s => s.code === code);
      if (!school) {
        return [];
      }
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProgramTemplates: () => dispatch(fetchProgramTemplates()),
    onSubmit: (values) => dispatch(createProgram(values)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
