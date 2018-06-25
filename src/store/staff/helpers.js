export const getName = (member) => {
  return `${member.firstName} ${member.lastName}`;
};

export const getSchoolCodes = (member) => {
  return member.schools;
};
