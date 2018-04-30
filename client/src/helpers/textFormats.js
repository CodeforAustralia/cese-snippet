export const commarise = (list) => {
  if (list.length) {
    return list.join(', ');
  }
  return list;
};
