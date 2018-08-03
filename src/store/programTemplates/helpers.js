export const makeProgramTemplatesOptions = (programTemplates) => {
  return programTemplates.map(s => ({
    value: s.name,
    label: s.name,
  }));
};

export const getOnlySuggestedPrimary = (programTemplates) => {
  return programTemplates.filter(t => {
    return t.suggestedPrimary && t.suggestedPrimary === true;
  })
};

export const getOnlySuggestedSecondary = (programTemplates) => {
  return programTemplates.filter(t => {
    return t.suggestedPrimary && t.suggestedPrimary === true;
  })
};

export const excludeProgramsProvided = (programTemplates, programsToFilter) => {
  const excludedProgramNames = programsToFilter.map(p => p.name);
  return programTemplates.filter(t => {
    return !excludedProgramNames.includes(t.name);
  })
};


