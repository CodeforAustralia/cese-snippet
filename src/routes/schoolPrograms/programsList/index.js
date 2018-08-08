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

import style from './style.scss';


const ProgramsList = ({ programs, school }) => {

  const addProgramUrl = getProgramsNewUrl();
  const year = programs[0].year;

  if (!programs.length) {
    return (
      <div>
        <div className={style.quickAddContainer}>
          <QuickAddProgram schoolCode={school.code} year={year} />
        </div>

        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">There are no Programs for "{year}" yet</h5>
            <p className="card-text">If you know of any programs happening at your school <br/>it's easy to add them!</p>
            <Button tag={RRLink} color="primary" to={addProgramUrl}>Add a program</Button>
            {/*<Button color="primary" to={getCreateProgramModalUrl({year: activeYear})} tag={RRLink}>Add a Program</Button>*/}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={style.quickAddContainer}>
        <QuickAddProgram schoolCode={school.code} year={year} />
      </div>

      {programs.map((p, idx) => {
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
