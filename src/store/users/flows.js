import get from 'lodash/get';

import { updateUser } from 'store/users/actionCreators';
import { fetchSchool } from "store/schools/actionCreators";


/**
 * Process to update a User
 * @param user
 * @returns <School>
 */
export const updateUserProcess = (user) => {
  return (dispatch) => {
    return dispatch(updateUser(user))
      .then((user) => {
        if (typeof user === 'undefined' || !user.firstName) {
          throw new Error('Non User provided to updateUserProcess');
        }
        const schoolCode = get(user, 'schools[0]', null);
        if (!schoolCode) {
          throw new Error('No school code set in updateUserProcess');
        }
        return dispatch(fetchSchool(schoolCode));
      })
  };
};
