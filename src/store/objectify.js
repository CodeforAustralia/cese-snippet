export const objectify = (data, key = 'id') => {
  if (typeof data === 'undefined') {
    throw new Error('No data supplied.');
  }
  if (!Array.isArray(data)) {
    data = [data];
  }
  const normalized = {};
  data.forEach(d => {
    const id = String(d[key]);
    normalized[id] = d;
  });
  return normalized;
};
