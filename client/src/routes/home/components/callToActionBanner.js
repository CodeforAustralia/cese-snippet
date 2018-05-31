import React from 'react';
import { Link as RRLink } from 'react-router-dom';
import {
  Button,
  Form,
  Label,
} from "reactstrap";

const Banner = () => (
  <Form inline>
    <Label className="mr-2">Join Snippet! </Label>&nbsp;
    <Button size="lg" color="pink" outline disabled tag={RRLink} to="/">Register for updates</Button>
  </Form>
);

export default Banner;
