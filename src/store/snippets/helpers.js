export const getFilterKey = ({ schoolCode, year, programId }) => {
  return String(`${schoolCode}_${year}_${programId}`);
};

export const sortByDateCreated = (snippets) => {
  return snippets.sort((a, b) => {
    return new Date(a.createdAt) < new Date(b.createdAt);
  });
};
