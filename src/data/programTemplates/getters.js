import PROGRAM_TEMPLATES_DATA from './programTemplates.json';
import SUGGESTED_PROGRAM_TEMPLATES_DATA from './suggestedProgramTemplates.json';

export const syncGetProgramTemplateOptions = () => {
  return PROGRAM_TEMPLATES_DATA.map(s => ({
    value: s.name,
    label: s.name,
  }));
};

export const syncGetSuggestedProgramTemplates = (subtype = null) => {
  return SUGGESTED_PROGRAM_TEMPLATES_DATA.filter((p => {
    return subtype ? p.subtype === subtype : true;
  }));
};
