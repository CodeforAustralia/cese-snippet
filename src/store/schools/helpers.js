export const makeSchoolsOptions = (schools) => {
  if (typeof schools === 'undefined') {
    throw new Error('Must provide "schools".');
  }
  if (!Array.isArray(schools)) {
    throw new Error('"schools" must be an Array.');
  }
  return schools.map(s => ({
    value: s.code,
    label: s.name,
  }));
};


