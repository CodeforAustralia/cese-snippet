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
  const { code, year } = filterProps;

  // console.log('setting filter', {
  //   key: getFilterKey(code, year),
  //   ids: data.map(p => p.id),
  //   code,
  //   year,
  // });

  return {
    type: ACTION_TYPES.setFilter,
    payload: {
      key: getFilterKey(code, year),
      ids: data && data.length ? data.map(p => p.id) : [],
      code,
      year,
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
    throw new Error('Must supply code to request a school.');
  }
  const { code, year = null } = filterProps;

  if (typeof code === 'undefined') {
    throw new Error('Must provide code as a prop to argument filterProps.');
  }

  return fetchFromCacheOrApi(`/programs?code=${code}&year=${year}`, { code, year });
};
