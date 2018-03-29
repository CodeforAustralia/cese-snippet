export const getSchoolProgramsUrl = (code, year) => {
  return `/account/schools/${code}/programs/${year}`;
};

export const getCreateProgramModalUrl = (formState = {}) => {
  return {
    pathname: `/account/create-program`,
    state: {
      formState,
      modal: true,
    },
  }
};

export const getCreateProgramUrl = (formState = {}) => {
  return {
    pathname: `/account/create-program`,
    state: {
      formState,
    }
  }
};
