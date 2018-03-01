import { h, Component } from 'preact';
import { route, Link } from 'preact-router';

import Layout from 'layouts/login';
import style from './style.scss';
import Logo from './logo.png';


export default class Login extends Component {
  onSubmit(e) {
    e.preventDefault();
    route('/account/programs', true)
  }
  render() {
    return (
      <Layout>
        <div>
          <img className={`mb-4 ${style.logo}`} src={Logo} alt="" width="100" height="100" />
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <p>If you're not sure what Snippet is, please read about it <Link href="/">here</Link>.</p>

          <form className={style.formSignin} onSubmit={this.onSubmit.bind(this)}>
            <div className="form-group">
              <label for="inputEmail" className="sr-only">Email address</label>
              <input type="email" id="inputEmail" className="form-control" placeholder="Email address" autofocus />
            </div>
            <div className="form-group">
              <label for="inputPassword" className="sr-only">Password</label>
              <input type="password" id="inputPassword" className="form-control" placeholder="Password" />
            </div>

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
