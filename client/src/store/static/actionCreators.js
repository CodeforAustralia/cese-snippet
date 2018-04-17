import { ACTION_TYPES } from "./reducer";

const BASE_URL = process.env.REACT_APP_STATIC_BASE_URL;

export const fetchProgramFields = () => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/program-fields.json`)
      .then((resp) => resp.json())
      .then((data) => {
        return dispatch({
          type: ACTION_TYPES.fetchedProgramFields,
          payload: data,
        })
      })
      // .catch((err) => {
      //   throw new Error(`Unable to fetch program fields data: ${err}`);
      // });
  }
};

export const fetchStaffList = () => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/staff-list.json`)
      .then((resp) => resp.json())
      .then((data) => {
        return dispatch({
          type: ACTION_TYPES.fetchedStaffList,
          payload: data,
        })
      })
      // .catch((err) => {
      //   throw new Error(`Unable to fetch staff list: ${err}`);
      // });
  }
};

export const fetchSchoolsList = () => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/schools-list.json`)
      .then((resp) => resp.json())
      .then((data) => {
        return dispatch({
          type: ACTION_TYPES.fetchedSchoolsList,
          payload: data,
        })
      })
      // .catch((err) => {
      //   throw new Error(`Unable to fetch schools list: ${err}`);
      // });
  }
};
