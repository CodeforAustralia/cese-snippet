import React from 'react';
import {
  Button,
} from 'reactstrap';
import { Link as RRLink } from 'react-router-dom';
import {
  getProgramsNewUrl,
} from 'helpers/url';

import ProgramCard from './../programCard';
import QuickAddProgram from './../quickAddProgram';
import { sortByDateCreated } from 'store/programs/helpers';

import style from './style.scss';


const ProgramsList = ({ programs, school, year }) => {

  const addProgramUrl = getProgramsNewUrl();

  if (!programs.length) {
    return (
      <div>
        <div className="card">
          <div className="card-body text-center">
            <h5 className="card-title">There are no Programs for "{year}" yet</h5>
            <p className="card-text">If you know of any programs happening at your school <br/>it's easy to add them!</p>
          </div>
          <QuickAddProgram schoolCode={school.code} year={year} title="" />
        </div>


      </div>
    );
  }

  return (
    <div>
      <div className={style.quickAddContainer}>
        <QuickAddProgram schoolCode={school.code} year={year} />
      </div>

      {sortByDateCreated(programs).map((p, idx) => {
        return (
          <div key={idx} className={style.programItem}>
            <ProgramCard program={p} school={school} />
          </div>
        )
      })}
    </div>
  )
};

export default ProgramsList;
