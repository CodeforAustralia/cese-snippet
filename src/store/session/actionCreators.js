import { ACTION_TYPES } from './reducer';

const win = typeof window !== 'undefined' ? window : global;

export const fetchSession = () => {
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPES.fetchRequest,
    });
    if (!win.__INITIAL_STATE__ || !win.__INITIAL_STATE__.session) {
      dispatch({
        type: ACTION_TYPES.fetchError,
        payload: {
          message: "No Session state available.",
        }
      })
    }
    return dispatch({
      type: ACTION_TYPES.fetchSuccess,
      payload: {
        session: win.__INITIAL_STATE__.session,
      }
    })
  }
};
