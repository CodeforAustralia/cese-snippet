import React from 'react';
import {
  Link,
} from 'react-router-dom';

import style from './style.scss';


const StickyFooter = () => {
  return (
    <div className={style.footerBand}>

      <p className={style.lhs}>Give us <Link to="/feedback" className={style.link}>Feedback</Link> | Check us out on <a href="https://www.yammer.com/det.nsw.edu.au/#/threads/inGroup?type=in_group&feedId=13755246&view=all" target="_blank" rel="noopener noreferrer" alt="Happy Data Group on NSW DET Yammer" className={style.link}>Yammer</a>
      </p>

      <p className={style.rhs}>
        <span className="float-right">Find out <Link to="/whats-next" className={style.link}>what amazing things are coming</Link> to Snippet.</span>
      </p>

    </div>
  )
};

export default StickyFooter;

