import React from 'react';
import PropTypes from 'prop-types';

const TruncatedText = ({ text, length = 10 }) => {
  if (typeof text === 'undefined' || !text.length) {
    return text;
  }
  return `${text.slice(0, length - 3)}…`;
};

TruncatedText.propTypes = {
  text: PropTypes.string,
  length: PropTypes.number,
};

export default TruncatedText;
