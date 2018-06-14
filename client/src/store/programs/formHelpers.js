export const getLevel1Categories = (staticCategories) => {
  return staticCategories.map(level1 => {
    return { value: level1.label, label: level1.label };
  });
};

export const getLevel2Categories = (staticCategories, level1Value) => {
  const level1Category = staticCategories.find(level1 => level1.value === level1Value);
  if (!level1Category) {
    return [];
  }
  if (!level1Category.categories) {
    return [];
  }
  return level1Category.categories.map(level2 => {
    // return {value: level2.value, label: level2.label};
    return { value: level2.label, label: level2.label };
  });
};

export const getStaffOptions = (staticStaffList) => {
  return staticStaffList.map((staff) => (
    { value: staff.id, label: staff.email }
  ));
};

export const getTermsOptions = (year) => {
  return [
    { value: '1', label: `T1 - ${year}` },
    { value: '2', label: `T2 - ${year}` },
    { value: '3', label: `T3 - ${year}` },
    { value: '4', label: `T4 - ${year}` },
  ]
};

export const getProgramTemplateOptions = (programTemplates) => {
  return programTemplates.map(p => ({ value: p.id, label: p.name }));
};

export const getSchoolsOptions = (schools) => {
  if (!schools) {
    return [];
  }
  return schools.map(s => ({ value: s.code, label: s.name }));
};

export const getSchoolYearLevelsOptions = (school) => {
  if (!school) {
    return [];
  }
  return school.yearLevels.map((y) => ({ value: y, label: y }));
};

export const getAudienceScope = () => {
  return [
    { value: 'Whole School', label: 'Whole School' },
    { value: 'Whole Year Level', label: 'Whole Year Level' },
    { value: 'Mandatory Selected Groups', label: 'Mandatory Selected Groups' },
    { value: 'Voluntary Participation', label: 'Voluntary Participation' },
  ]
};

export const getIsDeliveredByExternal = (deliveredByType) => {
  return Array.isArray(deliveredByType) && deliveredByType.includes('External Party');
};
