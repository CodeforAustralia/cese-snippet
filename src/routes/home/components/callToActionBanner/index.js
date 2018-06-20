import React from 'react';
import {
  Label,
} from "reactstrap";

import style from './style.scss';

const Banner = () => (
  <div className={style.banner}>
    <Label className="mr-2">Join Snippet! </Label>&nbsp;
    <a href="https://firebaseapp.us18.list-manage.com/subscribe?u=ad768dec01d640073ba9f8580&id=37030466bc" className={style.button}>Register for updates</a>
  </div>
);

export default Banner;
