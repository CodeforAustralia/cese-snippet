import get from 'lodash/get';
import isWithinRange from 'date-fns/is_within_range';


const makeOptions = json => {
  if (!json) {
    throw new Error();
  }
  return json.map(d => ({value: d.id, label: d.label}));
};

export const getDeliveredByTypeOptions = (cms) => {
  return makeOptions(get(cms, 'deliveredByType', []));
};

export const getYearLevelsOptions = (cms) => {
  return makeOptions(get(cms, 'yearLevels', []);
};

export const getFocusGroupOptions = (cms) => {
  return makeOptions(get(cms, 'focusGroup', []));
};

export const getCategoriesOptions = (cms) => {
  return makeOptions(get(cms, 'categories', []));
};

export const getAudienceScope = (cms) => {
  return makeOptions(get(cms, 'audienceScope', []));
};

export const getTermsOptions = (cms) => {
  return makeOptions(get(cms, 'terms', []));
};

export const getCohortSizeOptions = (cms) => {
  return makeOptions(get(cms, 'cohortSize', []));
};

export const getSefDomainOptions = (cms) => {
  return makeOptions(get(cms, 'sefDomain', []));
};

export const getSefDomainElementOptions = (domainOptions, domainValue) => {
  const option = domainOptions.find(o => o.value === domainValue);
  return makeOptions(option.elements);
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
