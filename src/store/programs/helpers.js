import isThisMinute from 'date-fns/is_this_minute';

import { getYear } from 'helpers/dateFormats';
import { commarise } from 'helpers/textFormats';

const currentYear = String(getYear());


export const hasPrograms = (programs, isFetching = false) => {
  return isFetching !== false && Array.isArray(programs);
};

export const getDefaultYear = () => currentYear;

export const getFilterKey = ({ schoolCode, year = currentYear }) => {
  if (typeof schoolCode === 'undefined') {
    throw new Error('Must provide code to getFilterKey.');
  }
  return String(`${schoolCode}_${year}`);
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

export const getIsNew = (program) => {
  return isThisMinute(program.createdAt) || isThisMinute(program.updatedAt);
};

//'For Students focusing on Literacy in Years K, 1, 2, 3, 4, 5, 6.';
export const getHumanisedMetaDescription = (program) => {
  const {
    yearLevels,
    participantGroups,
    focusGroup = null,
    focusGroupOther = null,
    externalProvider = null,
  } = program;

  if (!participantGroups || !yearLevels) {
    return null;
  }

  let str = 'For ';

  if (participantGroups) {
    str += commarise(participantGroups) + ' ';
  }

  if (focusGroup) { // todo - check
    str += ', focusing on ' + focusGroup;

    if (focusGroupOther) {
      str += 'and ' + focusGroupOther;
    }
  }

  if (externalProvider) {
    str += ' with ' + externalProvider;
  }

  if (yearLevels) {
    if (yearLevels.length > 1) {
      str += ' in Years ' + commarise(yearLevels);
    } else {
      str += ' in Year ' + yearLevels[0];
    }
  }

  return str;
};
