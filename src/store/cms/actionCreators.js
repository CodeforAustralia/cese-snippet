import bows from 'bows';
import { ACTION_TYPES } from './reducer';


const log = bows('Cms');

export const fetchRequest = () => {
  log('fetching');
  return {
    type: ACTION_TYPES.fetchRequest,
  }
};

export const fetchSuccess = (cms) => {
  log('fetch success');
  return {
    type: ACTION_TYPES.fetchSuccess,
    payload: {
      cms,
    }
  }
};

export const fetchError = (error) => {
  log('fetch error');
  return {
    type: ACTION_TYPES.fetchError,
    payload: {
      message: error.message || 'Something went wrong.'
    }
  }
};

export const fetchCms = () => {
  return (dispatch, getState, api) => {

    dispatch(fetchRequest);

    return api('/cms')
      .then((resp) => {
        const cms = resp.data;
        if (!cms) {
          throw new Error('Data not provided in response.');
        }
        dispatch(fetchSuccess(cms));
        return cms;
      })
      .catch((error) => {
        dispatch(fetchError(error));
        return error;
      });
  }
};
