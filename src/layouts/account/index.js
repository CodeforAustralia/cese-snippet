import { h } from 'preact';

import style from './style.scss';


const AccountLayout = ({children}) => (
  <div className={style.container}>
    {children}
  </div>
);

export default AccountLayout;
