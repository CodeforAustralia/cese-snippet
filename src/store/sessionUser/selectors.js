import get from 'lodash/get';

import { selectSession } from 'store/session/selectors';
import { selectUser } from "store/users/selectors";
import { selectSchool } from "store/schools/selectors";

export const selectSessionUser = (state) => {
  const session = selectSession(state);
  return selectUser(state, session.userId);
};

export const selectSessionUserSchool = (state, sessionUser = null) => {
  const user = sessionUser || selectSessionUser(state);
  const schoolCode = get(user, 'schools[0]', null);
  return selectSchool(state, schoolCode);
};
