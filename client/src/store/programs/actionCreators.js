import { ACTION_TYPES } from './reducer';
import { objectify } from 'store/objectify';
import { getFilterKey } from "./helpers";

const fetchFromCacheOrApi = (path, filterProps) => {
  return (dispatch, getState, api) => {
    dispatch({
      type: ACTION_TYPES.fetchRequest,
    });

    const req = api(path);
    return req.then(
      (resp) => {

        const { data: { programs } } = resp;
        const { code, year } = filterProps;

        console.log('setting filter', {
          key: getFilterKey(code, year),
          ids: programs.map(p => p.id),
          code,
          year,
        });

        dispatch({
          type: ACTION_TYPES.setFilter,
          payload: {
            key: getFilterKey(code, year),
            ids: programs.map(p => p.id),
            code,
            year,
          }
        });

        dispatch({
          type: ACTION_TYPES.fetchSuccess,
          payload: {
            programs: objectify(programs),
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

export const fetchProgramsByFilters = (filterProps) => {
  const { code, year = null } = filterProps;
  return fetchFromCacheOrApi(`/programs?code=${code}&year=${year}`, { code, year });
};
