import React from 'react';

const AccountProgramEdit = ({match}) => {
  const programId = match.params.programId;
  return (
    <h1>AccountProgramEdit: {programId}</h1>
  );
}

export default AccountProgramEdit;

