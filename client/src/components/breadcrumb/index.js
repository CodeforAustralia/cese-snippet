import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  if (items.length === 1) {
    return <p style={{fontSize:'.85rem'}}>{items[0].label}</p>
  }

  return (
    <p style={{fontSize:'.85rem'}}>
      {items.map((item, idx, arr) => {
        if (idx === arr.length - 1) {
          return <span key={idx}>{item.label}</span>
        }
        if (item.to) {
          return <span key={idx}><Link to={item.to}>{item.label}</Link><span className="ml-2 mr-2">{`/`}</span></span>
        }
        return <span key={idx}>{item.label}<span className="ml-2 mr-2">{`/`}</span></span>
      })}
    </p>
  )
};

export default Breadcrumb;
