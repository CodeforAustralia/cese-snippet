export const getName = (user) => {
  return `${user.firstName} ${user.lastName}`;
};

export const getSchoolCodes = (user) => {
  return user.schools;
};
