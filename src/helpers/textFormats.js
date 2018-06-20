export const commarise = (list) => {
  if (list.length) {
    return list.join(', ');
  }
  return list;
};

export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
