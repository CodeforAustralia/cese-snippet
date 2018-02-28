import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Home from '../routes/home';
// import Home from 'async!../routes/home';

export default class App extends Component {
  render() {
    return (
      <Router onChange={this.handleRoute}>
        <Home path="/" />
      </Router>
    );
  }
}
