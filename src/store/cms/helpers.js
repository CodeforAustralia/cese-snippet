import get from 'lodash/get';
// import isWithinRange from 'date-fns/is_within_range';


const makeOptions = json => {
  return json.map(d => ({value: d.id, label: d.label}));
};

export const getDeliveredByTypeOptions = (cms) => {
  const d = get(cms, 'deliveredByType', null);
  if (!d) {
    throw new Error('No value for "deliveredByType"')
  }
  return makeOptions(d);
};

export const getYearLevelsOptions = (cms) => {
  const d = get(cms, 'yearLevels', null);
  if (!d) {
    throw new Error('No value for "yearLevels"')
  }
  return makeOptions(d);
};

export const getFocusGroupOptions = (cms) => {
  const d = get(cms, 'focusGroup', null);
  if (!d) {
    throw new Error('No value for "focusGroup"')
  }
  return makeOptions(d);
};

export const getCategoriesOptions = (cms) => {
  const d = get(cms, 'categories', null);
  if (!d) {
    throw new Error('No value for "categories"')
  }
  return makeOptions(d);
};

export const getAudienceScope = (cms) => {
  const d = get(cms, 'audienceScope', null);
  if (!d) {
    throw new Error('No value for "audienceScope"')
  }
  return makeOptions(d);
};

export const getTermsOptions = (cms) => {
  const d = get(cms, 'terms', null);
  if (!d) {
    throw new Error('No value for "terms"')
  }
  return makeOptions(d);
};

export const getCohortSizeOptions = (cms) => {
  const d = get(cms, 'deliveredByType', null);
  if (!d) {
    throw new Error('No value for "deliveredByType"')
  }
  return makeOptions(d);
  return makeOptions(get(cms, 'cohortSize', null));
};

export const getSefDomainOptions = (cms) => {
  const d = get(cms, 'sefDomain', null);
  if (!d) {
    throw new Error('No value for "sefDomain"')
  }
  return makeOptions(d);
};

export const getSefDomainElementOptions = (domainOptions, domainValue) => {
  const option = domainOptions.find(o => o.value === domainValue);
  return makeOptions(option.elements);
};





// export const getTermDates = (cms) => {
//   return get(cms, 'termDates', []);
// };
//
//
// // todo - deprecate below here ------------
//
//
//
// export const getProgramTemplateOptions = (programTemplates) => {
//   return programTemplates.map(p => ({ value: p.id, label: p.name }));
// };
//
export const getSchoolsOptions = (schools) => {
  if (!schools) {
    return [];
  }
  return schools.map(s => ({ value: s.code, label: s.name }));
};
//
// export const getSchoolYearLevelsOptions = (school) => {
//   if (!school) {
//     return [];
//   }
//   return school.yearLevels.map((y) => ({ value: y, label: y }));
// };

export const getIsDeliveredByExternal = (deliveredByType) => {
  return Array.isArray(deliveredByType) && deliveredByType.includes('External Party');
};
//
// export const getCurrentTerm = (termDates, date = new Date()) => {
//   const withinTerm = termDates.find(term => {
//     return isWithinRange(date, term.start, term.end);
//   });
//   if (withinTerm) {
//     return withinTerm.term;
//   }
//   return [1,2,3,4];
// };
