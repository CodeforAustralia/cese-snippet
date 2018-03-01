import React from 'react';

import style from './style.scss';


const HomeLayout = ({children}) => {
  return (
    <div className={style.container}>
      {children}
    </div>
  );
};

export default HomeLayout;


