import React from 'react';
import { Link as RRLink } from 'react-router-dom';
import {
  Button,
} from 'reactstrap';

import Layout from 'layouts/login';
import { getWelcomeUrl } from 'helpers/url';
import style from './style.scss';


const FakeLogin = ({ sessionUser }) => {
  return (
    <Layout>
      <div className="text-center">
        <h1 className={style.h1}>Log in with your DoE account</h1>
        <div className={style.fieldset}>

          <div className={style.field}>
            <label className={style.fieldLabel}>User ID</label>
            <input className={style.fieldInput} type="text" defaultValue={sessionUser.username} placeholder="Enter your user ID" required />
            <span className={style.fieldHelpText}>Example: jane.citizen1</span>
          </div>

          <div className={style.field}>
            <label className={style.fieldLabel}>Password</label>
            <input className={style.fieldInput} type="password" defaultValue="******" placeholder="Enter your password" required />
          </div>

          <div>
            <Button className={style.fieldSubmit} tag={RRLink} to={getWelcomeUrl()} color="primary">Log in</Button>
            <p className={style.forgotPassword}><RRLink to="#" disabled>Forgot your password?</RRLink></p>
          </div>

          <hr className={style.hr} />

          <p className={style.havingTrouble}>Have trouble logging in?</p>

          <p className={style.forgotPassword}><RRLink to="#" disabled>Help for DoE/TAFE staff</RRLink></p>

        </div>
      </div>
    </Layout>
  )
};

export default FakeLogin;



