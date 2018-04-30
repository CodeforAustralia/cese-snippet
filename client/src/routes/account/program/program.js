import React from 'react';
import { Link } from 'react-router-dom';

import Loading from 'components/loading';


class Program extends React.Component {

  componentDidMount() {
    const { program } = this.props;
    if (!program) {
      this.props.fetchProgram();
    }
  }

  render() {
    const { isFetching, program } = this.props;

    if (isFetching !== false) {
      return <Loading />
    }

    return (
      <div>
        <p><Link to="/account">{`< Programs`}</Link></p>
        <h1>School program {program.id}</h1>
        <code>{JSON.stringify(program)}</code>
      </div>
    )
  }

}

export default Program;


// return (
//   <section className={cx(
//     style.program,
//     isNew ? `element-animated ${style.newTransition}` : null,
//   )}>
//     <div className={style.programLhs}>
//
//       <div className={style.programStatusLabel}>
//         <Badge color="info" pill>Active</Badge>
//       </div>
//
//       <h1 className="h5 font-weight-bold"><RRNavLink to={getProgramUrl(program.id)}>{program.name}</RRNavLink></h1>
//
//       <p className={style.programUpdatedAt}>Last updated: {program.updatedAt}</p>
//
//       <div className={style.programActions}>
//         <Button size="sm" to={getCreateProgramModalUrl(program)} color="secondary" tag={RRLink}>Edit</Button>
//       </div>
//
//       <dl className={cx(style.programMetaList, 'mb-0')}>
//         <dd className={style.programMetaValue}>
//           <div>
//             <span className={cx(style.programStaffAvatars, 'border border-dark rounded-circle')}>SK</span>
//             <span className={cx(style.programStaffAvatars, 'border border-dark rounded-circle')}>JJ</span>
//           </div>
//         </dd>
//
//         <dt className={style.programMetaLabel}>Category</dt>
//         <dd className={style.programMetaValue}>{program.category}{program.subCategory && ` > ${program.subCategory}`}</dd>
//       </dl>
//     </div>
//
//     <div className={style.programRhs}>
//       <p>{program.description}</p>
//
//       {program.aims &&
//       <dl>
//         <dt className={style.programMetaLabel}>Aims</dt>
//         <dd className={style.programMetaValue}>{program.aims}</dd>
//       </dl>
//       }
//
//       {program.participantGroups && program.participantGroups.length &&
//       <dl>
//         <dt className={style.programMetaLabel}>participantGroups</dt>
//         <dd className={style.programMetaValue}>{program.participantGroups}</dd>
//       </dl>
//       }
//
//       {program.participantGroupsDescription &&
//       <dl>
//         <dt className={style.programMetaLabel}>participantGroupsDescription</dt>
//         <dd className={style.programMetaValue}>{program.participantGroupsDescription}</dd>
//       </dl>
//       }
//
//       {program.yearLevels && program.yearLevels.length &&
//       <dl>
//         <dt className={style.programMetaLabel}>yearLevels</dt>
//         <dd className={style.programMetaValue}>{program.yearLevels}</dd>
//       </dl>
//       }
//
//       {program.cohortSize &&
//       <dl>
//         <dt className={style.programMetaLabel}>cohortSize</dt>
//         <dd className={style.programMetaValue}>{program.cohortSize}</dd>
//       </dl>
//       }
//
//       {program.deliveredByType &&
//       <dl>
//         <dt className={style.programMetaLabel}>deliveredByType</dt>
//         <dd className={style.programMetaValue}>{program.deliveredByType}</dd>
//       </dl>
//       }
//
//       {program.tags && program.tags.length &&
//       <dl>
//         <dt className={style.programMetaLabel}>Keywords</dt>
//         <dd className={style.programMetaValue}>{program.tags}</dd>
//       </dl>
//       }
//     </div>
//
//   </section>
// )