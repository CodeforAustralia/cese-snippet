import { getYear } from 'utils/formatDate';

const currentYear = getYear();

export const getDefaultYear = () => currentYear;

export const getFilterKey = ({code, year = currentYear}) => {
  if (typeof code === 'undefined') {
    throw new Error('Must provide code to getFilterKey.');
  }
  return `${code}_${year}`;
};
