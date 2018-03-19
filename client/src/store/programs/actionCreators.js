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

/**
 * @param data {Array}
 * @param filterProps {Object}
 */
export const setFilter = (data, filterProps) => {

  // console.log('setting filter', {
  //   key: getFilterKey(code, year),
  //   ids: data.map(p => p.id),
  //   filterProps,
  // });

  return {
    type: ACTION_TYPES.setFilter,
    payload: {
      key: getFilterKey(filterProps),
      ids: data && data.length ? data.map(p => p.id) : [],
      filterProps,
    }
  }
};

const fetchFromCacheOrApi = (path, filterProps) => {
  return (dispatch, getState, api) => {
    dispatch({
      type: ACTION_TYPES.fetchRequest,
    });

    return api(path)
      .then((resp) => {
        if (!resp.data) {
          throw new Error('Data not provided in response');
        }
        dispatch(setFilter(resp.data, filterProps));
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

export const fetchProgramsByFilters = (filterProps) => {
  if (typeof filterProps === 'undefined') {
    throw new Error('Must supply filterProps to fetchProgramsByFilters.');
  }
  const { code, year } = filterProps;

  if (typeof code === 'undefined') {
    throw new Error('Must provide code as a prop to argument filterProps.');
  }
  if (typeof year === 'undefined') {
    throw new Error('Must provide year as a prop to argument filterProps.');
  }

  return fetchFromCacheOrApi(`/programs?code=${code}&year=${year}`, filterProps);
};
