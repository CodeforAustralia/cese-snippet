import React from 'react';
import {
  Link,
} from 'react-router-dom';

import style from './style.scss';


const StickyFooter = () => {
  return (
    <div className={style.footerBand}>
      <p>Give us <Link to="/feedback" className={style.link}>Feedback</Link> | Check us out on <a href="https://www.yammer.com/det.nsw.edu.au/#/threads/inGroup?type=in_group&feedId=13755246&view=all" target="_blank" alt="Happy Data Group on NSW DET Yammer" className={style.link}>Yammer</a></p>
    </div>
  )
};

export default StickyFooter;

