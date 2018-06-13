import React from 'react'
import IndexedPartLayout from './../../indexedPartLayout';

const Part2Name = ({ index, totalIndex, }) => {
  return (
    <IndexedPartLayout index={index} totalIndex={totalIndex}>
      <div>
        [field]
      </div>
    </IndexedPartLayout>
  )
};

export default Part2Name;
