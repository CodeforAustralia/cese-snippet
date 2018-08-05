export const getOnboardingWelcomeUrl = () => {
  return '/onboarding/welcome';
};

export const getOnboardingSchoolUrl = () => {
  return '/onboarding/school';
};

export const getOnboardingSchoolProgramsUrl = () => {
  return '/onboarding/school-programs';
};

export const getSchoolProgramsUrl = (schoolCode, year) => {
  return `/schools/${schoolCode}/programs/${year}`;
};

export const getProgramUrl = (programId) => {
  return `/programs/${programId}`;
};

export const getProgramSnippetsUrl = (programId) => {
  return `/programs/${programId}/snippets`;
};

export const getProgramEditUrl = (programId) => {
  return `/programs/${programId}/edit`;
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

