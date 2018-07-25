export const getWelcomeUrl = () => {
  return {
    pathname: '/onboarding/welcome',
  };
};

export const getRegisterSchoolUrl = () => {
  return {
    pathname: '/register/school',
  }
};

export const getRegisterSchoolProgramsUrl = () => {
  return {
    pathname: '/register/school',
  }
};






export const getSchoolProgramsUrl = (schoolCode, year) => {
  return `/schools/${schoolCode}/programs/${year}`;
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

export const getProgramUrl = (programId) => ({
  pathname: `/account/programs/${programId}`,
});

