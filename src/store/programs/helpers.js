export const getFilterKey = (code, year = null) => {
  if (year) {
    return `${code}_${year}`;
  }
  return String(code);
};
