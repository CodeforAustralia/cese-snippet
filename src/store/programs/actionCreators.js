import bows from 'bows';
import queryString from 'query-string';

import { ACTION_TYPES } from './reducer';
import { objectify } from 'store/objectify';
import { getFilterKey } from "./helpers";


const log = bows('Programs');

export const fetchRequest = () => {
  log('fetching');
  return {
    type: ACTION_TYPES.fetchRequest,
  }
};

export const fetchSuccess = (programs) => {
  log(`fetch success`);
  return {
    type: ACTION_TYPES.fetchSuccess,
    payload: {
      programs: objectify(programs),
    },
  }
};

export const fetchError = (error) => {
  log('fetch error');
  return {
    type: ACTION_TYPES.fetchError,
    payload: {
      message: error.message || 'Something went wrong.'
    }
  }
};

export const fetchByFilterRequest = (filterKey) => {
  log('fetching by filter');
  return {
    type: ACTION_TYPES.fetchByFilterRequest,
    payload: {
      filterKey,
    }
  }
};

export const fetchByFilterSuccess = (programs, filterKey) => {
  log('fetch by filter success');
  return {
    type: ACTION_TYPES.fetchByFilterSuccess,
    payload: {
      programs: objectify(programs),
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

export const createSuccess = (program) => {
  log('create success');
  return {
    type: ACTION_TYPES.createSuccess,
    payload: {
      programs: objectify(program),
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

export const updateRequest = () => {
  log('creating');
  return {
    type: ACTION_TYPES.createRequest,
  }
};

export const updateSuccess = (program) => {
  log('create success');
  return {
    type: ACTION_TYPES.createSuccess,
    payload: {
      programs: objectify(program),
    }
  }
};

export const updateError = (error) => {
  log('create error');
  return {
    type: ACTION_TYPES.createSuccess,
    payload: {
      message: error.message || 'Something went wrong.'
    }
  }
};

export const updateFilter = (ids, filterKey) => {
  log('update filter');
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

export const fetchProgram = (programId) => {
  if (typeof programId === 'undefined') {
    throw new Error('Must provide "programId".');
  }
  return (dispatch, getState, api) => {
    dispatch(fetchRequest());
    return api(`/programs/${programId}`)
      .then((resp) => {
        const program = resp.data;
        if (!program) {
          throw new Error('Data not provided in response.');
        }
        dispatch(fetchSuccess(program));
        return program;
      })
      .catch((error) => {
        dispatch(fetchError(error));
        return error;
      });
  }
};

export const fetchByFilter = (filterProps) => {
  if (!filterProps.schoolCode || !filterProps.year) {
    throw new Error('Must provide filter props to fetch by filter.');
  }

  const search = queryString.stringify(filterProps);
  const filterKey = getFilterKey(filterProps);

  return (dispatch, getState, api) => {
    dispatch(fetchByFilterRequest(filterKey));
    return api(`/programs?${search}`)
      .then((resp) => {
        const programs = resp.data;
        if (!programs) {
          throw new Error('Data not provided in response.');
        }
        dispatch(fetchByFilterSuccess(programs, filterKey));
        return programs;
      })
      .then((programs) => {
        const programIds = programs.map(s => s.id);
        dispatch(updateFilter(programIds, filterKey));
        return programs;
      })
      .catch((error) => {
        dispatch(fetchByFilterError(error));
        return error;
      });
  }
};

export const createProgram = (program) => {
  if (!program.schoolCode || !program.year) {
    throw new Error('Must provide "schoolCode" and "year" props to Program to create.');
  }

  const filterKey = getFilterKey({
    schoolCode: program.schoolCode,
    year: program.year,
  });

  return (dispatch, getState, api) => {
    dispatch(createRequest());
    return api('/programs', {
      method: 'POST',
      body: JSON.stringify(program),
    })
      .then((resp) => {
        const program = resp.data;
        if (!program) {
          throw new Error('Data not provided in response');
        }
        dispatch(createSuccess(program));
        return program;
      })
      .then((program) => {
        const programId = program.id;
        dispatch(updateFilter(programId, filterKey));
        return program;
      })
      .catch((error) => {
        dispatch(createError(error));
        return error;
      });
  }
};

export const updateProgram = (program) => {
  if (!program.schoolCode || !program.year) {
    throw new Error('Must provide "schoolCode" and "year" props to Program to create.');
  }

  const filterKey = getFilterKey({
    schoolCode: program.schoolCode,
    year: program.year,
  });

  return (dispatch, getState, api) => {
    dispatch(updateRequest());
    return api(`/programs/${program.id}`, {
      method: 'PUT',
      body: JSON.stringify(program),
    })
      .then((resp) => {
        const newProgram = resp.data;
        if (!newProgram) {
          throw new Error('Data not provided in response');
        }
        dispatch(updateSuccess(newProgram));
        return program;
      })
      .then((newProgram) => {
        const programId = program.id;
        dispatch(updateFilter(programId, filterKey));
        return newProgram;
      })
      .catch((error) => {
        dispatch(updateError(error));
        return error;
      });
  }
};
