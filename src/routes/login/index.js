import { h, Component } from 'preact';
import { route } from 'preact-router';

import Layout from 'layouts/account';
import style from './style.scss';


export default class Login extends Component {
  onSubmit(e) {
    e.preventDefault();
    route('/account/programs', true)
  }
  render() {
    return (
      <Layout>
        <div className={style.layoutCentered}>
          <form className={style.formSignin} onSubmit={this.onSubmit.bind(this)}>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label for="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" autofocus />
            <label for="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" />
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          </form>
        </div>
      </Layout>
    );
  }
}
