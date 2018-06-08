import React from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

const GiveFeedback = ({ link }) => (
  <a target="_blank" href={link} rel="noopener noreferrer" className={style.link}>
    <span className={style.text}><span>Give Feedback</span></span>
  </a>
);

GiveFeedback.propTypes = {
  link: PropTypes.string.isRequired,
};

export default GiveFeedback;
