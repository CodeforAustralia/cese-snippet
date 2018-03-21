import queryString from 'query-string';
import groupBy from 'lodash/groupBy';

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


export const setFilters = (data) => {
  const res = {};

  const schoolGroups = groupBy(data, 'code');

  for (let code in schoolGroups) {
    const schoolGroup = schoolGroups[code];

    const schoolYearGroups = groupBy(schoolGroup, 'year');

    for (let year in schoolYearGroups) {
      const schoolYearGroup = schoolYearGroups[year];
      const ids = schoolYearGroup.map(d => d.id);

      const filterKey = getFilterKey({code, year});

      res[filterKey] = ids;
    }
  }

  return {
    type: ACTION_TYPES.setFilters,
    payload: {
      filters: res,
    }
  }
};

const fetchFromCacheOrApi = (path) => {
  return (dispatch, getState, api) => {
    dispatch({
      type: ACTION_TYPES.fetchRequest,
    });

    return api(path)
      .then((resp) => {
        if (!resp.data) {
          throw new Error('Data not provided in response');
        }
        dispatch(setFilters(resp.data));
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
export const fetchProgramsByFilters = (filterProps) => {
  if (typeof filterProps === 'undefined') {
    throw new Error('Must supply filterProps to fetchProgramsByFilters.');
  }
  const search = queryString.stringify(filterProps);
  return fetchFromCacheOrApi(`/programs?${search}`);
};
