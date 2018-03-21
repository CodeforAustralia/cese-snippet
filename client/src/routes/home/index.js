import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Snippet</h1>
    <h2>Programs happening in schools now</h2>
    <p>For school staff to view or publish news about program applications in NSW schools.</p>

    <div>
      <Link to="/login">Log in</Link>
    </div>
  </div>
);

export default HomePage;
