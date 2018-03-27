import { getYear } from 'utils/formatDate';

const currentYear = getYear();

export const getDefaultYear = () => currentYear;

export const getFilterKey = ({code, year = currentYear}) => {
  if (typeof code === 'undefined') {
    throw new Error('Must provide code to getFilterKey.');
  }
  return String(`${code}_${year}`);
};

export const parseFilterKeys = (filterKeys) => {
  return filterKeys.map(k => {
    const props = k.split('_');
    return {
      code: props[0],
      year: props[1],
    }
  });
};
