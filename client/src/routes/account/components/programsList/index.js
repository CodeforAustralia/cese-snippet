import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Badge,
} from 'reactstrap';
import cx from 'classnames';
import { getCreateProgramModalUrl } from 'helpers/url';
import style from './style.scss';


const EmptyItem = ({ openAddProgram, activeYear }) => {
  return (
    <section className={style.emptyProgram}>
      <img src="https://via.placeholder.com/115x115?text=" className={style.emptyProgramIcon} alt="" />
      <h1 className={cx('h2 mb-3', style.emptyProgamTitle)}>There are no Programs for {activeYear}</h1>
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
      <div className={style.programLhs}>

        <div className={style.programStatusLabel}>
          <Badge color="info" pill>Active</Badge>
        </div>

        <h1 className="h5 font-weight-bold">{program.name}</h1>

        <p className={style.programUpdatedAt}>Last updated: {program.updatedAt}</p>

        <div className={style.programActions}>
          <Button size="sm" tag={Link} to={editProgramUrl} className="btn-light">Edit</Button>
        </div>

        <dl className={cx(style.programMetaList, 'mb-0')}>
          <dd className={style.programMetaValue}>
            <div>
              <span className={cx(style.programStaffAvatars, 'border border-dark rounded-circle')}>SK</span>
              <span className={cx(style.programStaffAvatars, 'border border-dark rounded-circle')}>JJ</span>
            </div>
          </dd>

          <dt className={style.programMetaLabel}>Category</dt>
          <dd className={style.programMetaValue}>{program.category}{program.subCategory && ` > ${program.subCategory}`}</dd>
        </dl>
      </div>

      <div className={style.programRhs}>
        <p>{program.description}</p>

        {program.aims &&
          <dl>
            <dt className={style.programMetaLabel}>Aims</dt>
            <dd className={style.programMetaValue}>{program.aims}</dd>
          </dl>
        }

        {program.participantGroups && program.participantGroups.length &&
          <dl>
            <dt className={style.programMetaLabel}>participantGroups</dt>
            <dd className={style.programMetaValue}>{program.participantGroups}</dd>
          </dl>
        }

        {program.participantGroupsDescription &&
          <dl>
            <dt className={style.programMetaLabel}>participantGroupsDescription</dt>
            <dd className={style.programMetaValue}>{program.participantGroupsDescription}</dd>
          </dl>
        }

        {program.yearLevels && program.yearLevels.length &&
          <dl>
            <dt className={style.programMetaLabel}>yearLevels</dt>
            <dd className={style.programMetaValue}>{program.yearLevels}</dd>
          </dl>
        }

        {program.cohortSize &&
          <dl>
            <dt className={style.programMetaLabel}>cohortSize</dt>
            <dd className={style.programMetaValue}>{program.cohortSize}</dd>
          </dl>
        }

        {program.deliveredByType &&
          <dl>
            <dt className={style.programMetaLabel}>deliveredByType</dt>
            <dd className={style.programMetaValue}>{program.deliveredByType}</dd>
          </dl>
        }

        {program.tags && program.tags.length &&
          <dl>
            <dt className={style.programMetaLabel}>Keywords</dt>
            <dd className={style.programMetaValue}>{program.tags}</dd>
          </dl>
        }
      </div>

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
