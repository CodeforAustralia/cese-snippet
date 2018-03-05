import React from 'react';

const AccountPrograms = ({programs}) => {
  return (
    <div>
      <h1>AccountPrograms</h1>
      <code>{JSON.stringify(programs)}</code>
    </div>
  )
};

export default AccountPrograms;
