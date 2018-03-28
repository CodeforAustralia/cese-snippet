export const getSchoolProgramsUrl = (code, year) => {
  return `/account/schools/${code}/programs/${year}`;
};

export const getCreateProgramUrl = () => {
  return `/account/create-program`;
};
