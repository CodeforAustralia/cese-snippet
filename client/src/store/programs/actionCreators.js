import queryString from 'query-string';

import { ACTION_TYPES } from './reducer';
import { objectify } from 'store/objectify';
import { getFilterKey } from "./helpers";


export const createOrUpdatePrograms = (programs) => {
  return {
    type: ACTION_TYPES.fetchSuccess,
    payload: {
      programs: objectify(programs),
    }
  }
};


export const setFilter = (data, {filterKey}) => {
  const filters = {
    [filterKey]: []
  };

  if (data && data.length) {
    filterKey[filterKey] = data.map(d => d.id);
  }

  return {
    type: ACTION_TYPES.setFilters,
    payload: {
      filters,
    }
  }
};

const fetchFromCacheOrApi = (path, props) => {
  return (dispatch, getState, api) => {
    dispatch({
      type: ACTION_TYPES.fetchRequest,
    });

    return api(path)
      .then((resp) => {
        if (!resp.data) {
          throw new Error('Data not provided in response');
        }
        dispatch(setFilter(resp.data, props));
        return resp;
      })
      .then((resp) => {
        dispatch(createOrUpdatePrograms(resp.data));
        return resp;
      })
      .catch((error) => {
        // todo - status messages
        dispatch({
          type: ACTION_TYPES.fetchError,
          payload: {
            message: error.message || 'Something went wrong.'
          }
        });
        return error;
      })
  }
};


/**
 * @param filterProps {Object} can be any filter, not just 'code' and 'year'
 */
export const fetchProgramsByFilter = (filterProps) => {
  if (typeof filterProps === 'undefined') {
    throw new Error('Must supply filterProps to fetchProgramsByFilter.');
  }
  const search = queryString.stringify(filterProps);
  return fetchFromCacheOrApi(`/programs?${search}`, { filterKey: getFilterKey(filterProps) });
};


export const createProgram = (program) => {
  return (dispatch, getState, api) => {

    // todo - sanitize input

    return api('/programs', {
        method: 'POST',
        body: JSON.stringify(program),
      })
      .then((resp) => {
        dispatch(createOrUpdatePrograms(resp.data));
        return resp;
      })
  }
};
