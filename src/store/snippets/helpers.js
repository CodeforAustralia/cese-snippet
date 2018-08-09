export const getFilterKey = ({ schoolCode, year, programId }) => {
  return String(`${schoolCode}_${year}_${programId}`);
};

export const sortByDateCreated = (programs) => {
  return programs
    .map(a => a)  // DON'T allow Array.sort to mutate
    .sort((a, b) => {
      return new Date(a.createdAt) < new Date(b.createdAt);
    });
};
