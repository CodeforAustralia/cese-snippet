import initialState from 'store/initialState';

export const ACTION_TYPES = {
  activateCreateProgramFormScope: 'APP/ACTIVATE_CREATE_PROGRAM_FORM_SCOPE',
};

const appReducer = (state = initialState.app, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.activateCreateProgramFormScope:
      const newState = {...state};
      newState['createProgramFormScope'] = payload.data;
      return newState;

    default:
      return state;
  }
};

export default appReducer;
