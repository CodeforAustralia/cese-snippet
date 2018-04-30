import datefnsGetYear from 'date-fns/get_year';

export const getYear = (date = new Date()) => {
  return datefnsGetYear(date);
};

export const getTerm = (date = new Date()) => {
  return 2;   // todo
};
