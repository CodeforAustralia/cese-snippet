
export const getWelcomeUrl = () => {
  return '/onboarding/welcome';
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

export const getRegisterSchoolUrl = (showBreadcrumb = false) => {
  return {
    pathname: `/register/school`,
    state: {
      showBreadcrumb,
    }
  }
};

