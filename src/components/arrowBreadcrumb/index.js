import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link as RRLink } from 'react-router-dom';
import cx from 'classnames';

import style from './style.scss';

const ArrowBreadcrumb = ({ linkList }) => {
  return (
    <div className={style.breadcrumbContainer}>
      <Breadcrumb className={style.breadcrumb}>
        {linkList.map((link, key) => (
          <BreadcrumbItem key={key} className={cx(
            style.breadcrumbItem,
            link.visited ? style.visited : '',
            link.active ? style.active : '',
            link.disabled ? style.disabled : '',
          )}>
            <RRLink to={link.to} disabled={link.disabled}>{link.label}</RRLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </div>
  )
};

export default ArrowBreadcrumb;
