export const hasSchool = (school) => {
  return typeof school !== 'undefined' && school.name;
};

export const makeSchoolsOptions = (schools) => {
  return schools.map(s => ({
    value: s.code,
    label: s.name,
  }));
};


