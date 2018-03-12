import mockApi from '_api';
import { ACTION_TYPES } from './reducer';
import { objectify } from 'store/objectify';
import { getFilterKey } from "./helpers";

const USE_MOCKS = Boolean(process.env.REACT_APP_USE_MOCKS) || false;

const fetchFromCacheOrApi = (path, filterProps) => {
  return (dispatch, getState, api) => {

    dispatch({
      type: ACTION_TYPES.fetchRequest,
      payload: USE_MOCKS ? filterProps: null,
    });

    const req = USE_MOCKS ? mockApi(path, filterProps) : api(path);
    return req.then(
      (resp) => {
        const { data } = resp;
        const { code, year } = filterProps;

        console.log('setting filter', {
          key: getFilterKey(code, year),
          ids: data.map(p => p.id),
          code,
          year,
        });

        dispatch({
          type: ACTION_TYPES.setFilter,
          payload: {
            key: getFilterKey(code, year),
            ids: data.map(p => p.id),
            code,
            year,
          }
        });

        debugger
        dispatch({
          type: ACTION_TYPES.fetchSuccess,
          payload: {
            appliedPrograms: objectify(data),
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

export const fetchAppliedProgramsByFilters = (filterProps) => {
  const { code, year = null } = filterProps;
  return fetchFromCacheOrApi(`/appliedPrograms?code=${code}&year=${year}`, { code, year });
};
