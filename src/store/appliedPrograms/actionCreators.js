import mockApi from '_api';
import { ACTION_TYPES } from './reducer';
import { objectify } from 'store/objectify';

const USE_MOCKS = process.env.REACT_APP_USE_MOCKS || false;

export const fetchAppliedPrograms = () => {
  return (dispatch, getState, api) => {
    dispatch({
      type: ACTION_TYPES.fetchRequest,
    });
    const req = USE_MOCKS ? mockApi('/appliedPrograms') : api('/appliedPrograms');
    return req.then(
      (appliedPrograms) => {
        dispatch({
          type: ACTION_TYPES.fetchSuccess,
          payload: {
            appliedPrograms: objectify(appliedPrograms),
          }
        });
      },
      (error) => {
        dispatch({
          type: ACTION_TYPES.fetchError,
          payload: {
            message: error.message || 'Something went wrong.'
          }
        })
      }
    );
  }
};
