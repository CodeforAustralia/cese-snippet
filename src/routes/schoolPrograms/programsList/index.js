import React from 'react';
import {
  Button,
} from 'reactstrap';
import { Link as RRLink } from 'react-router-dom';
import {
  getProgramsNewUrl,
} from 'helpers/url';

import ProgramCard from './../programCard';

import style from './style.scss';

const ProgramsList = ({ programs = [], year, schoolCode }) => {

  const addProgramUrl = getProgramsNewUrl();

  if (!programs.length) {
    return (
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">There are no Programs for "{year}" yet</h5>
          <p className="card-text">If you know of any programs happening at your school <br/>it's easy to add them!</p>
          <Button tag={RRLink} color="primary" to={addProgramUrl}>Add a program</Button>
          {/*<Button color="primary" to={getCreateProgramModalUrl({year: activeYear})} tag={RRLink}>Add a Program</Button>*/}
        </div>
      </div>
    );
  }

  return (
    <div>
      {programs.map((p, idx) => {
        return (
          <div key={idx} className={style.programItem}>
            <ProgramCard program={p} year={year} schoolCode={schoolCode} />
          </div>
        )
      })}
    </div>
  )
};

export default ProgramsList;
