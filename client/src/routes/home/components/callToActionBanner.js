import React from 'react';
import { Link as RRLink } from 'react-router-dom';
import {
  Button,
  Form,
  Label,
} from "reactstrap";

const Banner = () => (
  <Form inline>
    <Label className="mr-2">Join Snippet! Be a part of the journey as we improve initiative visibility in NSW schools.</Label>
    <Button size="lg" color="pink" outline disabled tag={RRLink} to="/">Register for updates</Button>
  </Form>
);

export default Banner;
