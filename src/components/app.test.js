import { h, render } from 'preact';
import App from './app';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
});
