export const getFilterKey = ({ schoolCode, year, programId }) => {
  return String(`${schoolCode}_${year}_${programId}`);
};
