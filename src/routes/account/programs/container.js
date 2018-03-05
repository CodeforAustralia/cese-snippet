import { connect } from 'react-redux';
import { selectPrograms } from 'store/programs/ducks';

export const mapStateToProps = (state) => {
  return {
    programs: selectPrograms(state),
  }
};

export default connect(mapStateToProps, null);
