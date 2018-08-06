import bows from 'bows';

import { objectify } from 'store/objectify';
import { ACTION_TYPES } from './reducer';


const log = bows('Users');

export const fetchRequest = () => {
  log('fetching');
  return {
    type: ACTION_TYPES.fetchRequest,
  }
};

export const fetchSuccess = (user) => {
  log(`fetch success`);
  return {
    type: ACTION_TYPES.fetchSuccess,
    payload: {
      users: objectify(user),
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

export const updateRequest = () => {
  log('updating');
  return {
    type: ACTION_TYPES.updateRequest,
  }
};

export const updateSuccess = (user) => {
  log(`update success`);
  return {
    type: ACTION_TYPES.updateSuccess,
    payload: {
      users: objectify(user),
    },
  }
};

export const updateError = (error) => {
  log('update error');
  return {
    type: ACTION_TYPES.updateError,
    payload: {
      message: error.message || 'Something went wrong.'
    }
  }
};


export const fetchSessionUserFromPageState = (user) => {
  return (dispatch) => {
    dispatch(fetchRequest);
    dispatch(fetchSuccess(user));
  }
};

export const fetchUser = (userId) => {
  if (typeof userId === 'undefined') {
    throw new Error('Must provide userId.');
  }

  return (dispatch, getState, api) => {
    dispatch(fetchRequest);
    return api(`/users/${userId}`)
      .then((resp) => {
        const user = resp.data;
        if (!user) {
          throw new Error('Data not provided in response.');
        }
        dispatch(fetchSuccess(user));
        return user;
      })
      .catch((error) => {
        dispatch(fetchError(error));
        return error;
      });
  }
};

export const fetchUsers = (userIds) => {
  if (!Array.isArray(userIds)) {
    throw new Error('Must supply array to fetchStaff.');
  }
  if (!userIds.length) {
    throw new Error('Must provide userIds.');
  }

  const search = userIds.reduce((acc, val) => {
    return acc + `&id=${val}`;
  }, '');

  return (dispatch, getState, api) => {
    dispatch(fetchRequest());
    return api(`/users?${search}`)
      .then((resp) => {
        const user = resp.data;
        if (!user) {
          throw new Error('Data not provided in response.');
        }
        dispatch(fetchSuccess(user));
        return user;
      })
      .catch((error) => {
        dispatch(fetchError(error));
        return error;
      });
  }
};

export const updateUser = (user) => {
  if (typeof user === 'undefined') {
    throw new Error('Must provide user.');
  }

  return (dispatch, getState, api) => {
    dispatch(updateRequest());
    return api(`/users/${user.id}`, {
      method: 'PUT',
      body: JSON.stringify(user),
    })
      .then((resp) => {
        const newUser = resp.data;
        dispatch(updateSuccess(newUser));
        return newUser;
      })
      .catch((error) => {
        dispatch(updateError(error));
        return error;
      });
  }
};
