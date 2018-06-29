import get from 'lodash/get';
import isWithinRange from 'date-fns/is_within_range';

export const getPartipantGroupsOptions = (cms) => {
  return get(cms, 'participantGroupsOptions', []);
};

export const getDeliveredByTypeOptions = (cms) => {
  return get(cms, 'deliveredByTypeOptions', []);
};

export const getYearLevelsOptions = (cms) => {
  return get(cms, 'yearLevelsOptions', []);
};

export const getFocusGroupOptions = (cms) => {
  return get(cms, 'focusGroupOptions', []);
};

export const getTagsOptions = (cms) => {
  return get(cms, 'tagsOptions', []);
};

export const getCategoriesOptions = (cms) => {
  return get(cms, 'categoriesOptions', []);
};

export const getAudienceScope = (cms) => {
  return get(cms, 'audienceScope', []);
};

export const getTermsOptions = () => {
  return [
    { value: 'T1', label: 'T1' },
    { value: 'T2', label: 'T2' },
    { value: 'T3', label: 'T3' },
    { value: 'T4', label: 'T4' },
  ];
};





export const getTermDates = (cms) => {
  return get(cms, 'termDates', []);
};


// todo - deprecate below here ------------



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

export const getIsDeliveredByExternal = (deliveredByType) => {
  return Array.isArray(deliveredByType) && deliveredByType.includes('External Party');
};

export const getCurrentTerm = (termDates, date = new Date()) => {
  const withinTerm = termDates.find(term => {
    return isWithinRange(date, term.start, term.end);
  });
  if (withinTerm) {
    return withinTerm.term;
  }
  return [1,2,3,4];
};
