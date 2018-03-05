import { connect } from 'react-redux';

export const mapStateToProps = (state) => {
  return {
    appliedPrograms: state.appliedPrograms,
  }
};

export default connect(mapStateToProps, null);
