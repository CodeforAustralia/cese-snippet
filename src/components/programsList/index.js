import React from 'react';
import ProgramCard from 'components/programCard';
import ProgramCardContainer from 'routes/schoolPrograms/programCardContainer';

import style from './style.scss';


const ConnectedProgramCard = ProgramCardContainer(ProgramCard);

const ProgramsList = ({ programs = [], snippets = [], year, schoolCode }) => {

  if (!programs.length) {
    return (
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">There are no programs for "{year}" yet</h5>
          <p className="card-text">If you know of any programs happening at your school <br/>it's easy to add them!</p>
          <a href="#" className="btn btn-primary">Add a program</a>
          {/*<Button color="primary" to={getCreateProgramModalUrl({year: activeYear})} tag={RRLink}>Add a Program</Button>*/}
        </div>
      </div>
    );
  }

  return (
    <div>
      {programs.map((p, idx) => {
        const programSnippets = snippets.filter(s => s.programId === p.id);
        return (
          <div key={idx} className={style.programItem}>
            <ConnectedProgramCard program={p} year={year} schoolCode={schoolCode} />
          </div>
        )
      })}
    </div>
  )
};

export default ProgramsList;
