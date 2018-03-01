import { h } from 'preact';

import style from './style.scss';


const LoginLayout = ({children}) => (
  <div className={style.container}>
    {children}
  </div>
);

export default LoginLayout;


