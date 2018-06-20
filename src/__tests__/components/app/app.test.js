/* global it */
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app/app';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App session={{}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
