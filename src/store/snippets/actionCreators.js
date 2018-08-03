import bows from 'bows';
import queryString from 'query-string';

import { ACTION_TYPES } from './reducer';
import { objectify } from 'store/objectify';
import { getFilterKey } from "./helpers";


const log = bows('Snippets');

export const fetchSuccess = (snippets) => {
  log('fetch success');

  return {
    type: ACTION_TYPES.fetchSuccess,
    payload: {
      snippets: objectify(snippets),
    }
  }
};

/**
 * @param data {Array} Snippets to add to the filter
 * @param filterKey {String} key in the format "[school code]_2018_[program id]"
 */
const createFilter = (data, filterKey = null) => {
  if (!filterKey) {
    throw new Error('Must provide filterKey');
  }
  return {
    type: ACTION_TYPES.createFilters,
    payload: {
      filterKey,
      filterValue: data.map(d => d.id), // snippet ids
    }
  }
};

export const updateFilter = (data, filterKey) => {
  return {
    type: ACTION_TYPES.updateFilters,
    payload: {
      filterKey,
      filterValue: data.map(d => d.id),
    }
  }
};


/**
 * Create Snippet Thunk Sequence
 * @param Snippet {Object}
 * @param filterProps {Object} - {schoolCode, year, programId}
 * @returns {Function} Thunk
 */
export const createSnippet = (snippet, {schoolCode = null, year = null}) => {
  // Steps:
  // 1. sanitize input
  // 2. POST
  // 3. update byId
  // 4. *update* a filter to append item
  //    - do this last in case so filter listeners will get updates

  if (!snippet.programId || !schoolCode || !year) {
    throw new Error('Must provide "programId", "schoolCode" and "year".');
  }

  const filterKey = getFilterKey({
    schoolCode,
    year,
    programId: snippet.programId,
  });

  log(`Posting (creating): ${JSON.stringify(snippet)}`);

  return (dispatch, getState, api) => {
    // 2.
    return api('/snippets', {
      method: 'POST',
      body: JSON.stringify(snippet),
    })
      .then((resp) => {
        if (!resp.data) {
          throw new Error('Data not provided in response');
        }
        log(`Posted: ${resp.data}`);
        // 3.
        dispatch(fetchSuccess(resp.data));
        return resp;
      })
      .then((resp) => {
        // 4.
        let d = resp.data;

        if (!Array.isArray(d)) {
          d = [d]
        }
        dispatch(updateFilter(d, filterKey));
        return resp;
      })
      .catch((error) => {
        log(`Error: ${error}`);
        // todo - status messages
        return error;
      });
  }
};


/**
 * filterProps {Object} - {schoolCode, year, programId}
 */
export const fetchSnippetsByFilter = (filterProps) => {
  if (typeof filterProps === 'undefined') {
    throw new Error('Must provide filterProps.');
  }
  const filterKey = getFilterKey(filterProps);
  const search = queryString.stringify(filterProps);
  return fetchFromApiOrCache(`/snippets?${search}`, filterKey);
};

export const fetchSnippetsByProgram = (filterProps) => {
  const filterKey = getFilterKey(filterProps);
  const search = queryString.stringify({programId: filterProps.programId, year: filterProps.year});
  return fetchFromApiOrCache(`/snippets?${search}`, filterKey);
};



/**
 * Fetch Programs Thunk Sequence
 * @param path
 * @param filterKey {String}
 * @returns {function(*, *, *)}
 */
export const fetchFromApiOrCache = (path, filterKey = null) => {
  // Steps:
  // 0. Check if item is cached, if it is serve it instead and end.
  // 1. GET
  // 2. update byId
  // 3. *create* new filter values for this search key filter
  //    - do this last in case so filter listeners will update
  //    - ONLY DO THIS IF FILTER PROPS ARE PROVIDED - i might fetch program on program detail page not in a filter for example

  log(`Fetching: ${path}`);

  return (dispatch, getState, api) => {

    // 0.
    if (filterKey) {
      const state = getState();
      if (filterKey in state.snippets.filters) {
        return state.snippets.filters[filterKey];
      }
    }

    dispatch({
      type: ACTION_TYPES.fetchRequest,
    });
    // 1.
    return api(path)
      .then((resp) => {
        if (!resp.data) {
          throw new Error('Data not provided in response');
        }
        log(`Fetched`);
        // 2.
        dispatch(fetchSuccess(resp.data));
        return resp;
      })
      .then((resp) => {
        // 3.
        if (filterKey) {
          dispatch(createFilter(resp.data, filterKey));
        }
        return resp;
      })
      .catch((error) => {
        // todo - status messages
        log(`Error: ${error}`);
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
