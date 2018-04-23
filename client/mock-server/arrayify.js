var arrayify = (str) => {
  let a = str.slice(1, str.length -1);
  if (a.includes(',')) {
    return JSON.stringify(a.split(','));
  }
  return JSON.stringify(Array(a));
};

module.exports = arrayify;
