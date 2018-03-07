import { ACTION_TYPES } from './reducer';

const win = typeof window !== 'undefined' ? window : global;

export const fetchSession = () => {
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPES.fetchRequest,
    });

    return new Promise((resolve, reject) => {
      return setTimeout(() => {
        if (!win.__INITIAL_STATE__ || !win.__INITIAL_STATE__.session) {
          reject(dispatch({
            type: ACTION_TYPES.fetchError,
            payload: {
              message: "No Session state available.",
            }
          }))
        }
        resolve(dispatch({
          type: ACTION_TYPES.fetchSuccess,
          payload: {
            session: win.__INITIAL_STATE__.session,
          }
        }));
      }, 500);
    });
  }
};

