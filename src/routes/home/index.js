import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.scss';

import Layout from 'layouts/home';

const Home = () => (
  <Layout>
    <div className={style.home}>
      <Link to="/login">Log in</Link>
    </div>
  </Layout>
);

export default Home;
