import { connect } from 'react-redux';
import { syncGetSchoolsOptions } from "data/schools/getters";

export const mapStateToProps = (state) => {
  return {
    optionsSchools: syncGetSchoolsOptions(),
  }
};

export default connect(mapStateToProps);
