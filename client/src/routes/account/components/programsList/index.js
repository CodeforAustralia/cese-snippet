import React from 'react';
import {
  Link
} from 'react-router-dom';

import { getCreateProgramModalUrl } from 'helpers/url';

const ProgramsList = ({ programs }) => {
  return (
    <div>
      <h2>Programs:</h2>
      <ul>
        {programs.map((program, idx) => {
          const editProgramUrl = getCreateProgramModalUrl(program);
          return (
            <li key={idx}>
              <span>{program.name}</span> <span>{program.year}</span> <Link to={editProgramUrl}>Edit</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default ProgramsList;
