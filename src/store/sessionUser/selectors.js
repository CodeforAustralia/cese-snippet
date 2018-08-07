import { selectSession } from 'store/session/selectors';
import { selectUser } from "store/users/selectors";

export const selectSessionUser = (state) => {
  const session = selectSession(state);
  return selectUser(state, session.userId);
};
