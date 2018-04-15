export const makeSchoolsListOptions = (schoolsList = []) => {
  return schoolsList.map(school => (
    { value: school.code, label: school.name }
  ))
};
