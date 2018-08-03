import bows from 'bows';
import { ACTION_TYPES } from './reducer';

const log = bows('Cms');

export const fetchSuccess = (cms) => {
  log('fetch success');
  return {
    type: ACTION_TYPES.fetchSuccess,
    payload: {
      cms,
    }
  }
};
