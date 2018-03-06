import React from 'react';

const AccountPrograms = ({appliedPrograms}) => {
  return (
    <div>
      <h1>Schools</h1>
      <code>{JSON.stringify(appliedPrograms)}</code>
    </div>
  )
};

export default AccountPrograms;
