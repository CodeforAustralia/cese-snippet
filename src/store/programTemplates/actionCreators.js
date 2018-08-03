import bows from 'bows';

import { ACTION_TYPES } from './reducer';
import { objectify } from 'store/objectify';

const log = bows('Program Templates');

export const fetchSuccess = (programTemplates) => {
  log('fetch success');
  return {
    type: ACTION_TYPES.fetchSuccess,
    payload: {
      programTemplates: objectify(programTemplates),
    }
  }
};
