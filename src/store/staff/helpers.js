export const getName = (member) => {
  return `${member.firstName} ${member.lastName}`;
};

export const getSchoolCodes = (member) => {
  return member.schools;
};

export const filterStaffBySearch = (staff = null, prop, query) => {
  if (!staff) {
    return [];
  }

  if (!staff[0][prop]) {
    throw new Error(`Prop: ${prop} not a key of Staff.`);
  }

  return staff.filter(member => {
    return member[prop].includes(query);
  });
};
