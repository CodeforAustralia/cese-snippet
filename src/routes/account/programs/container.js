import { connect } from 'react-redux';

export const mapStateToProps = (state) => {
  return {
    programs: state.programs,
  }
};

export default connect(mapStateToProps, null);
