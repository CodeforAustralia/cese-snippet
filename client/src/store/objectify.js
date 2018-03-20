/**
 * For Array input returns Object output with key.
 * Return value key will always be a String.
 * @param data {Array} [{id:'1'}]
 * @param key
 * @returns {Object} {'1': {id:'1'}}
 */
export const objectify = (data, key = 'id') => {
  const normalized = {};

  if (typeof data === 'undefined') {
    throw new Error('No data supplied.');
  }
  if (!Array.isArray(data)) {
    data = [data];
  }

  const firstKey = data[0][key];

  if (typeof firstKey === 'undefined') {
    throw new Error(`Key: ${key} not available on datum: ${JSON.stringify(data[0])}`);
  }

  data.forEach(d => {
    // coerce because JavaScript will do this anyway
    const id = String(d[key]);
    normalized[id] = d;
  });

  return normalized;
};
