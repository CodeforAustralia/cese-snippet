import React from 'react';
import {
  Link,
} from 'react-router-dom';

import style from './style.scss';


const StickyFooter = () => {
  return (
    <div className={style.footerBand}>

      <p className={style.lhs}>Give us <Link to="/feedback" className={style.link}>Feedback</Link> | Check us out on 
      </p>

      <p className={style.rhs}>
        <span className="float-right">Find out <Link to="/whats-next" className={style.link}>what amazing things are coming</Link> to Snippet.</span>
      </p>

    </div>
  )
};

export default StickyFooter;

