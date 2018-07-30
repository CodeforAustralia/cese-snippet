import DATA from './pilotSchools.json';
import { parseSchools } from './parsers';

const SCHOOLS_DATA = parseSchools(DATA);

export const syncGetSchoolsOptions = () => {
  return SCHOOLS_DATA.map(s => ({
    value: s.code,
    label: s.name,
  }));
};
