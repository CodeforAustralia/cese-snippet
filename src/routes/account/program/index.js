import React from 'react';

const AccountProgram = ({match}) => {
  const programId = match.params.programId;
  return (
    <h1>AccountProgram: {programId}</h1>
  );
};

export default AccountProgram;
