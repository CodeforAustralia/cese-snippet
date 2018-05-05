import React from 'react';
import PropTypes from 'prop-types';
import {
  Badge,
} from 'reactstrap';
import style from './style.scss';

const PillsList = ({ list }) => {
  if (list.length) {
    return list.map((i, idx, arr) => (
      <Badge key={idx} className={`${style.badge} ${idx !== arr.length ? 'mr-1' : ''}`}>{i}</Badge>
    ));
  }
  return <Badge className={style.badge}>list</Badge>;
};

PillsList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default PillsList;
