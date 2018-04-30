import React from 'react';
import PropTypes from 'prop-types';

const CommarisedList = ({ list }) => {
  return list.join(', ');
};

CommarisedList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default CommarisedList;
