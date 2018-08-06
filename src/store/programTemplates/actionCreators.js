import bows from 'bows';

import { ACTION_TYPES } from './reducer';
import { objectify } from 'store/objectify';


const log = bows('Program Templates');

export const fetchRequest = () => {
  log('fetching');
  return {
    type: ACTION_TYPES.fetchRequest,
  }
};

export const fetchSuccess = (programTemplates) => {
  log('fetch success');
  return {
    type: ACTION_TYPES.fetchSuccess,
    payload: {
      programTemplates: objectify(programTemplates),
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

export const fetchProgramTemplates = () => {
  return (dispatch, getState, api) => {

    dispatch(fetchRequest);

    return api('/programTemplates')
      .then((resp) => {
        const programTemplates = resp.data;
        if (!programTemplates) {
          throw new Error('Data not provided in response.');
        }
        dispatch(fetchSuccess(programTemplates));
        return programTemplates;
      })
      .catch((error) => {
        dispatch(fetchError(error));
        return error;
      });
  }
};
