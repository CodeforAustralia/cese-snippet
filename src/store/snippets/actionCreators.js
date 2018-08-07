import bows from 'bows';
import queryString from 'query-string';

import { ACTION_TYPES } from './reducer';
import { objectify } from 'store/objectify';
import { getFilterKey } from "./helpers";


const log = bows('Snippets');

export const fetchByFilterRequest = (filterKey) => {
  log('fetching by filter');
  return {
    type: ACTION_TYPES.fetchByFilterRequest,
    payload: {
      filterKey,
    }
  }
};

export const fetchByFilterSuccess = (snippets, filterKey) => {
  log('fetch by filter success');
  return {
    type: ACTION_TYPES.fetchByFilterSuccess,
    payload: {
      snippets: objectify(snippets),
      filterKey,
    }
  }
};

export const fetchByFilterError = (message, filterKey) => {
  log('fetch by filter error');
  return {
    type: ACTION_TYPES.fetchByFilterError,
    payload: {
      message,
      filterKey,
    }
  }
};

export const createRequest = () => {
  log('creating');
  return {
    type: ACTION_TYPES.createRequest,
  }
};

export const createSuccess = (snippet) => {
  log('create success');
  return {
    type: ACTION_TYPES.createSuccess,
    payload: {
      snippets: objectify(snippet),
    }
  }
};

export const createError = (error) => {
  log('create error');
  return {
    type: ACTION_TYPES.createSuccess,
    payload: {
      message: error.message || 'Something went wrong.'
    }
  }
};

export const updateFilter = (ids, filterKey) => {
  if (!Array.isArray(ids)) {
    ids = [ids]
  }
  return {
    type: ACTION_TYPES.updateFilter,
    payload: {
      filterKey,
      filterValue: ids,
    }
  }
};

export const fetchByFilter = (filterProps) => {
  if (!filterProps.schoolCode || !filterProps.year || !filterProps.programId) {
    throw new Error('Must provide filter props to fetch by filter.');
  }

  const search = queryString.stringify(filterProps);
  const filterKey = getFilterKey(filterProps);

  return (dispatch, getState, api) => {
    dispatch(fetchByFilterRequest(filterKey));
    return api(`/snippets?${search}`)
      .then((resp) => {
        const snippets = resp.data;
        if (!snippets) {
          throw new Error('Data not provided in response.');
        }
        dispatch(fetchByFilterSuccess(snippets, filterKey));
        return snippets;
      })
      .then((snippets) => {
        const snippetIds = snippets.map(s => s.id);
        dispatch(updateFilter(snippetIds, filterKey));
        return snippets;
      })
      .catch((error) => {
        dispatch(fetchByFilterError(error));
        return error;
      });
  }
};

export const createSnippet = (snippet) => {
  if (!snippet.schoolCode || !snippet.year || !snippet.programId) {
    throw new Error('Must provide "schoolCode", "year" and "programId" props to Snippet to create.');
  }

  const filterKey = getFilterKey({
    schoolCode: snippet.schoolCode,
    year: snippet.year,
    programId: snippet.programId,
  });

  return (dispatch, getState, api) => {
    dispatch(createRequest());
    return api('/snippets', {
      method: 'POST',
      body: JSON.stringify(snippet),
    })
      .then((resp) => {
        const snippet = resp.data;
        if (!snippet) {
          throw new Error('Data not provided in response');
        }
        dispatch(createSuccess(snippet));
        return snippet;
      })
      .then((snippet) => {
        dispatch(updateFilter(snippet, filterKey));
        return snippet;
      })
      .catch((error) => {
        dispatch(createError(error));
        return error;
      });
  }
};
