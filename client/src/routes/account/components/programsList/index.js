import React from 'react';
import {
  Link as RRLink,
  NavLink as RRNavLink,
} from 'react-router-dom';
import {
  Button,
  Badge,
} from 'reactstrap';
import cx from 'classnames';

import TruncatedText from 'components/truncatedText';
import {
  getCreateProgramModalUrl,
  getProgramUrl,
} from "helpers/url";
import {
  getIsCurrent,
  getIsNew,
} from 'store/programs/helpers';
import style from './style.scss';


const sortByNewest = (programs) => {
  return programs.sort((a, b) => {
    return new Date(a.createdAt) < new Date(b.createdAt);
  });
};

const EmptyItem = ({ activeYear }) => {
  return (
    <section className={style.emptyProgram}>
      <img src="https://via.placeholder.com/115x115?text=" className={style.emptyProgramIcon} alt="" />
      <h1 className={cx('h2 mb-3', style.emptyProgamTitle)}>There are no Programs for {activeYear}</h1>
      <p className={cx('h5 mb-4', style.emptyProgamSubTitle)}>If you know details of a Program, it's easy to create one!</p>
      <Button color="primary" size="lg" to={getCreateProgramModalUrl({year: activeYear})} className="mb-4" tag={RRLink}>Add a New Program</Button>
      <p className={cx('font-weight-light text-muted', style.emptyProgramHelpText)}>Worried that you might be missing information about the Program? Don't worry, any staff member from your school will be able to edit after the Program is added.</p>
    </section>
  )
};


const ProgramItem = ({ program }) => {

  const isNew = getIsNew(program);

  const isCurrent = getIsCurrent(program);


  return (
    <section className={cx(
      style.program,
      isNew ? `element-animated ${style.newTransition}` : null,
    )}>

      {isCurrent ?
        <div className={style.programStatusLabel}>
          <Badge color="info" pill>Active</Badge>
        </div> :
        null
      }

      <h1 className="h5 font-weight-bold"><RRNavLink to={getProgramUrl(program.id)}>{program.name}</RRNavLink></h1>

      <p>{program.yearLevels}</p>

      <p><TruncatedText text={program.description} length={40} /></p>

      <p>{program.category}{program.subCategory ? ` > ${program.subCategory}` : null}</p>

      {program.focusGroup ? <p>{program.focusGroup}</p> : null}
      {program.focusGroupOther ? <p>{program.focusGroupOther}</p> : null}
      {program.externalProvider ? <p>{program.externalProvider}</p> : null}

      <div className={style.programActions}>
        <Button size="sm" to={getCreateProgramModalUrl(program)} color="secondary" tag={RRLink}>Edit</Button>
      </div>

    </section>
  )
};


const ProgramsList = ({ programs, openAddProgram, activeYear }) => {
  if (!programs.length) {
    return <EmptyItem openAddProgram={openAddProgram} activeYear={activeYear} />
  }
  return sortByNewest(programs).map((program, idx) => {
    return <ProgramItem key={idx} program={program} />
  });
};

export default ProgramsList;
