import React from 'react';
import {
  Link as RRLink,
  NavLink as RRNavLink,
} from 'react-router-dom';
import {
  Button,
  Badge,
  CardColumns,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
} from 'reactstrap';
import cx from 'classnames';

import TruncatedText from 'components/truncatedText';
import CommarisedList from 'components/commarisedList';
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



const ProgramsList = ({ programs, openAddProgram, activeYear }) => {

  if (!programs.length) {
    return <EmptyItem openAddProgram={openAddProgram} activeYear={activeYear} />
  }

  return (
    <CardColumns>
      {sortByNewest(programs).map((program, idx) => {

        const isNew = getIsNew(program);

        const isCurrent = getIsCurrent(program);

        return (
          <Card key={idx} className={isNew ? `element-animated ${style.newTransition}` : null}>
            <CardBody>
              {isCurrent ?
                <div className="mb-2">
                  <Badge color="info" pill>Active</Badge>
                </div> :
                null
              }

              <CardTitle><RRNavLink to={getProgramUrl(program.id)}>{program.name}</RRNavLink></CardTitle>
              <CardSubtitle className="mb-2">{program.category}{program.subCategory ? ` > ${program.subCategory}` : null}</CardSubtitle>

              <CardText>
                <p className="mb-0"><TruncatedText text={program.description} length={300} /></p>
              </CardText>

            </CardBody>

            <CardBody className={style.programMeta}>
              <CardText>
                <p className="mb-1">Years: <CommarisedList list={program.yearLevels} /></p>
                {program.focusGroup ? <p className="mb-1">{program.focusGroup}</p> : null}
                {program.focusGroupOther ? <p className="mb-1">{program.focusGroupOther}</p> : null}
                {program.externalProvider ? <p className="mb-1">{program.externalProvider}</p> : null}
              </CardText>
            </CardBody>

            <CardBody>
              <CardLink to={getCreateProgramModalUrl(program)} color="secondary" tag={RRLink}>Edit</CardLink>
              <CardLink to={getProgramUrl(program.id)} color="secondary" tag={RRNavLink} className="float-right" alt="Read more">{`>`}</CardLink>
            </CardBody>

          </Card>
        )
      })}
    </CardColumns>
  );

};

export default ProgramsList;
