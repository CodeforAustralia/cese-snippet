import { ACTION_TYPES } from "./reducer";

const BASE_URL = process.env.REACT_APP_STATIC_BASE_URL;

export const fetchCmsData = () => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/cms-data.json`)
      .then((resp) => resp.json())
      .then((data) => {
        return dispatch({
          type: ACTION_TYPES.fetchRequest,
          payload: data,
        })
      })
      // .catch((err) => {
      //   throw new Error(`Unable to fetch program fields data: ${err}`);
      // });
  }
};
