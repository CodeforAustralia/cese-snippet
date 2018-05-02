import React from 'react';
import { Container } from 'reactstrap';

import Header from './components/header';
import Footer from './components/stickyFooter';
import style from './style.scss';


const LayoutBasic = ({ children }) => {
  return (
    <div>
      <Header />

      <Container className={style.layoutContainer}>
        {children}
      </Container>

      <Footer />
    </div>
  );
};

export default LayoutBasic;
