const isEmpty = (data) => {
  return (
    data === null ||
    data === undefined ||
    (typeof data === 'object' && Object.keys(data).length === 0) ||
    (typeof data === 'string' && data.length === 0)
  );
};

module.exports = isEmpty;
