import datefnsGetYear from 'date-fns/get_year';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import format from 'date-fns/format';

export const getYear = (date = new Date()) => {
  return datefnsGetYear(date);
};

export const getHumanRelativeDate = (date = new Date()) => {
  return distanceInWordsToNow(date);
};

export const getShortDate = (date = new Date()) => {
  return format(date, 'D MMMM');
};
