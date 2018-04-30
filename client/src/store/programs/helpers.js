import isThisMinute from 'date-fns/is_this_minute';

import {
  getYear,
  getTerm,
} from 'utils/formatDate';
import { commarise } from 'helpers/textFormats';


const currentYear = getYear();
const currentTerm = getTerm();

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


export const getIsCurrent = (program) => {
  return program.terms && program.terms.length ? program.terms.includes(currentTerm) : program.terms;
};

export const getIsNew = (program) => {
  return isThisMinute(program.createdAt) || isThisMinute(program.updatedAt);
};

export const getHumanisedMetaDescription = (program) => {
  const {
    yearLevels,
    participantGroups,
    focusGroup = null,
    focusGroupOther = null,
    externalProvider = null,
  } = program;

  let str = 'For ';

  if (participantGroups) {
    str += + commarise(participantGroups) + ' ';
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
