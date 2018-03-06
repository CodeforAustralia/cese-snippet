import { combineReducers } from 'redux';

const createFetchingReducer = (actionTypeKey, dataReducer) => {

  const ACTION_TYPES = {
    fetchRequest: `${actionTypeKey}/FETCH_REQUEST`,
    fetchSuccess: `${actionTypeKey}/FETCH_SUCCESS`,
    fetchError: `${actionTypeKey}/FETCH_ERROR`,
    update: `${actionTypeKey}/UPDATE`
  };

  const isFetching = (state = false, action) => {
    switch (action.type) {
      case ACTION_TYPES.fetchRequest:
        return true;
      case ACTION_TYPES.fetchSuccess:
      case ACTION_TYPES.fetchError:
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    switch (action.type) {
      case ACTION_TYPES.fetchError:
        return action.message;
      case ACTION_TYPES.fetchSuccess:
      case ACTION_TYPES.fetchRequest:
        return null;
      default:
        return state;
    }
  };

  return combineReducers({
    [actionTypeKey.toLowerCase()]: dataReducer,
    isFetching,
    errorMessage,
  });

};
//
//
//
// const sessionReducer = createFetchingReducer('SESSION', ((state, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case ACTION_TYPES.update:
//       return payload.schools;
//     default:
//       return state;
//   }
// }));
