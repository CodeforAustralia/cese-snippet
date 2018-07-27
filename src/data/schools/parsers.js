const getSchoolSubType = subtype => {
  if (subtype === "Kinder to Year 6") {
    return ["K", "1", "2", "3", "4", "5", "6"];
  } else if (subtype === 'Year 7 to Year 12') {
    return ["7", "8", "9", "10", "11", "12"];
  } else if (subtype === 'Year 7 to Year 9') {
    return ["7", "8", "9"];
  } else if (subtype === "Year 10 to Year 12") {
    return ["10", "11", "12"];
  } else if (subtype === "Kinder to Year 2") {
    return ["K", "1", "2"];
  } else if (subtype === "Year 11 to Year 12") {
    return ["11", "12"];
  } else if (
      subtype === 'Emotional disturbance' ||
      subtype === 'Medium / High Support needs' ||
      subtype === 'Hospital School' ||
      subtype === 'Behaviour Disorder'
  ) {
    return [];
  }
  throw new Error(`subtype ${subtype} not recognised.`);
};

const getAcronymName = name => {
  const firstLetters = name.match(/\b(\w)/g);
  return firstLetters.join('');
};

/**
 * Parse the Master Schools List to create data that Snippet expects
 * @param schools
 */
export const parseSchools = (schools) => {
  return schools.map(school => {
    return {
      "code": String(school.School_code),
      "name": school.School_name,
      "yearLevels": getSchoolSubType(school.School_subtype),
      "avatar": `http://via.placeholder.com/70x70?text=${getAcronymName(school.School_name)}`
    }
  })
};
