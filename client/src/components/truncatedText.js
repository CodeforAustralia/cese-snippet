import React from 'react';
import PropTypes from 'prop-types';

const TruncatedText = ({ text, length = 10 }) => {
  if (!text.length) {
    return text;
  }

  return `${text.slice(0, length - 3)}...`;
};

TruncatedText.propTypes = {
  text: PropTypes.string.isRequired,
  length: PropTypes.number,
};

export default TruncatedText;
