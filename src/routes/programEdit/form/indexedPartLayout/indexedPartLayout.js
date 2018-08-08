import React from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

const IndexedPartLayout = ({ index, totalIndex = null, children }) => {
  let text = null;
  if (!totalIndex) {
    text = index;
  } else {
    text = `${index} of ${totalIndex}`;
  }
  return (
    <div className={style.field}>
      <div className={style.indexCol}>
        <span className={style.index}>({text})</span>
      </div>
      <div className={style.fieldCol}>
        {children}
      </div>
    </div>
  )
};

IndexedPartLayout.propTypes = {
  index: PropTypes.string.isRequired,
  totalIndex: PropTypes.string,
};

export default IndexedPartLayout;

