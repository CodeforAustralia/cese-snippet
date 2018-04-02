import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
} from 'reactstrap';
import cx from 'classnames';
import { getCreateProgramModalUrl } from 'helpers/url';
import style from './style.scss';


const EmptyItem = ({ openAddProgram, activeYear }) => {
  return (
    <section className={style.emptyProgram}>
      <img src="http://via.placeholder.com/115x115?text=" className={style.emptyProgramIcon} alt="" />
      <p className={cx('h2 mb-3', style.emptyProgamTitle)}>There are no Programs for {activeYear}</p>
      <p className={cx('h5 mb-4', style.emptyProgamSubTitle)}>If you know details of a Program, it's easy to create one</p>
      <Button color="primary" size="lg" onClick={openAddProgram} className="mb-4">Add a New Program</Button>
      <p className={cx('font-weight-light text-muted', style.emptyProgramHelpText)}>Worried that you might be missing information about the Program? Don't worry, any staff member from your school will be able to edit after the Program is added.</p>
    </section>
  )
};

const ProgramItem = ({ program, openAddProgram }) => {
  const editProgramUrl = getCreateProgramModalUrl(program);
  return (
    <section className={style.program}>
      <div className={style.columnLeft}>
      </div>

      <div className={style.columnRight}>
      </div>

      <span>{program.name}</span> <span>{program.year}</span> <Link to={editProgramUrl}>Edit</Link>
    </section>
  )
};


const ProgramsList = ({ programs, openAddProgram, activeYear }) => {

  if (!programs.length) {
    return <EmptyItem openAddProgram={openAddProgram} activeYear={activeYear} />
  }
  return programs.map((program, idx) => {
    return <ProgramItem key={idx} program={program} />
  })
};

export default ProgramsList;
