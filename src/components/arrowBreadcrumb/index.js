import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link as RRLink } from 'react-router-dom';
import cx from 'classnames';

import style from './style.scss';

const BreadcrumbArrow = ({ linkList }) => {
  return (
    <div className={style.breadcrumbContainer}>
      <Breadcrumb className={style.breadcrumb}>
        {linkList.map((link, key) => (
          <BreadcrumbItem key={key} className={cx(style.breadcrumbItem, link.active ? style.active : '')}>
            <RRLink to={link.to}>{link.label}</RRLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </div>
  )
};

export default BreadcrumbArrow;
