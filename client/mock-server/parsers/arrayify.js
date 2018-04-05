var arrayify = (str) => {
  let a = str.slice(1, str.length -1);
  if (a.includes(',')) {
    return a.split(',');
  }
  return a;
};

module.exports = arrayify;
