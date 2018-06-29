import React from 'react';
import { Redirect } from 'react-router';

import Breadcrumb from 'components/breadcrumb';
import { CreateForm as Form } from './../components/programForm';
import { getSchoolProgramsUrl } from 'helpers/url';


const CreateProgram = ({
                         history,
                         sessionUser,
                         userSchoolCodes,
                       }) => {

  if (!userSchoolCodes.length) {
    return <Redirect to="/account/register" />
  }

  return (
    <div>
      <Breadcrumb items={[
        { label: 'Programs', to: '/account' },
        { label: 'Add Program' }
      ]} />

      <h1 className="mb-4">Add a program</h1>

      <p>Tell us about a school program in a nutshell, or be as detailed as you want.</p>
      <p className="mb-4">Contributing to the list of program in your school is the first step in helping create awareness about your programs and initiatives for the school community.</p>

      <Form sessionUser={sessionUser}
        onSubmitSuccess={(code, year) => history.push(getSchoolProgramsUrl(code, year))} />
    </div>
  );
};

export default CreateProgram;
