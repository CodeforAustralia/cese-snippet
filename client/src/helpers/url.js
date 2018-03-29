export const getSchoolProgramsUrl = (code, year) => {
  return `/account/schools/${code}/programs/${year}`;
};

export const getCreateProgramModalUrl = (formState = {}) => {
  let isEdit = false;
  if (formState.id) {
    isEdit = true;
  }
  return {
    pathname: `/account/create-program`,
    state: {
      formState,
      modal: true,
      isEdit,
    },
  }
};

export const getCreateProgramUrl = (formState = {}) => {
  let isEdit = false;
  if (formState.id) {
    isEdit = true;
  }
  return {
    pathname: `/account/create-program`,
    state: {
      formState,
      isEdit,
    }
  }
};
