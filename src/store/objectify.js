export const objectify = (data, key = 'id') => {
  const normalized = {};
  data.forEach(d => {
    const id = String(d[key]);
    normalized[id] = d;
  });
  return normalized;
};
