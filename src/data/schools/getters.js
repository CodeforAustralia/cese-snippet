import DATA from './pilotSchools.json';
import { parseSchools } from './parsers';

const SCHOOLS_DATA = parseSchools(DATA);

export const syncGetSchoolsOptions = (schools = SCHOOLS_DATA) => {
  return schools.map(s => ({
    value: s.code,
    label: s.name,
  }));
};
