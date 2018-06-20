import React from 'react';
import { HashLink } from 'react-router-hash-link';

import style from './style.scss';

const win = typeof window !== 'undefined' ? window : global;

const StepProgress = ({ options }) => {
 return (
   <ul className={style.progressbar}>
     {options.map((item, idx, arr) => (
       <li key={idx} style={{width: `${win.Math.floor(100 / arr.length)}%`}}><HashLink to={item.to}>{item.label}</HashLink></li>
     ))}
   </ul>
 )
};

export default StepProgress;
