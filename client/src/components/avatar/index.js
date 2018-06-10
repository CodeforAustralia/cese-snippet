import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import style from './style.scss';

const Avatar = ({ first, last, className = null }) => {
  let initials = '';

  if (!first || !last) {
    initials = '👤'; // todo
  } else {
    if (first) {
      initials += first.charAt(0);
    }
    if (last) {
      initials += first.charAt(0);
    }
  }

  return (
    <div className={cx(style.container, className)}>
      <span>{initials}</span>
    </div>
  )
};

Avatar.propTypes = {
  first: PropTypes.string,
  last: PropTypes.string,
};

export default Avatar;
