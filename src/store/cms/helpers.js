import get from 'lodash/get';

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
  const d = get(cms, 'cohortSize', null);
  if (!d) {
    throw new Error('No value for "cohortSize"')
  }
  return makeOptions(d);
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

export const getIsDeliveredByExternal = (deliveredByType) => {
  return Array.isArray(deliveredByType) && deliveredByType.includes('External Party');
};
