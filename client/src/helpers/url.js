export const getSchoolProgramsUrl = (code, year) => {
  return `/account/schools/${code}/programs/${year}`;
};

export const getCreateProgramModalUrl = (initialFormState = {}) => {
  let isEdit = false;
  if (initialFormState.id) {
    isEdit = true;
  }
  return {
    pathname: `/account/create-program`,
    state: {
      initialFormState,
      modal: true,
      isEdit,
    },
  }
};

export const getCreateProgramUrl = (initialFormState = {}) => {
  let isEdit = false;
  if (initialFormState.id) {
    isEdit = true;
  }
  return {
    pathname: `/account/create-program`,
    state: {
      initialFormState,
      isEdit,
    }
  }
};
