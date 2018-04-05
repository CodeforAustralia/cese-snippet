import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const styles = {
  fontSize: '1.1em',
  fontWeight: 'bolder'
};

const TopBanner = () => (
  <div>
    <Navbar color="dark" dark expand="md">
      <NavbarBrand
        href="https://education.nsw.gov.au/"
        target="_blank"
        style={styles}
      >
        NSW DEPARTMENT OF EDUCATION
      </NavbarBrand>
    </Navbar>
  </div>
);

export default TopBanner;
