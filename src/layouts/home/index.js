import { h } from 'preact';

import style from './style.scss';


const HomeLayout = ({children}) => (
  <div className={style.container}>
    {children}
  </div>
);

export default HomeLayout;


