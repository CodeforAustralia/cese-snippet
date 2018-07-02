import { connect } from 'react-redux';

import { selectStaffBySearch } from "store/staff/selectors";
import { fetchStaffBySearch } from "store/staff/actionCreators";

export const mapStateToProps = (state) => {
  return {
    getStaffBySearch: (prop, query) => selectStaffBySearch(state, prop, query),
    getOptionsStaff: (staff) => staff.map(m => ({ value: m.id, label: m.email })),
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchStaffBySearch: (prop, query) => dispatch(fetchStaffBySearch(prop, query)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
