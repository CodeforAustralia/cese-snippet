import React from 'react';

const AccountPrograms = ({appliedPrograms}) => {
  return (
    <div>
      <h1>AccountPrograms</h1>
      <code>{JSON.stringify(appliedPrograms)}</code>
    </div>
  )
};

export default AccountPrograms;
