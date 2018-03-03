import React from 'react';
import Nav from 'components/nav';

import style from './style.scss';

const AccountLayout = ({children}) => (
  <div className={style.container}>
    {children}
    <Nav />
  </div>
);

export default AccountLayout;
