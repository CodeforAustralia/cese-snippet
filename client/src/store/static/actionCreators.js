import { ACTION_TYPES } from "./reducer";

export const fetchProgramFields = () => {
  return (dispatch) => {
    return fetch('static/program-fields.json')
      .then((resp) => resp.json())
      .then((data) => {
        return dispatch({
          type: ACTION_TYPES.fetchedProgramFields,
          payload: data,
        })
      });
  }
};

export const fetchStaffList = () => {
  return (dispatch) => {
    return fetch('static/staff-list.json')
      .then((resp) => resp.json())
      .then((data) => {
        return dispatch({
          type: ACTION_TYPES.fetchedStaffList,
          payload: data,
        })
      });
  }
};
