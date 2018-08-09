import React from 'react';
// import orderBy from 'lodash/orderBy';
// import Bows from 'bows';

import ProgramCard from './../programCard';
import QuickAddProgram from './../quickAddProgram';

import style from './style.scss';


// const log = Bows('C: ProgramsList');

class ProgramsList extends React.Component {

  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     orderedPrograms: [],
  //   };
  // }

  // componentDidMount() {
  //   this.order(this.props.programs);
  // }
  //
  // componentDidUpdate(prevProps) {
  //   if (prevProps.programs.length !== this.props.programs.length) {
  //     this.order(this.props.programs);
  //   }
  // }

  // order(programs) {
  //   const ordered = orderBy(programs, ['createdAt'], ['desc']);
  //
  //   log('ordering');
  //   log(JSON.stringify(ordered.map(p => p.id)))
  //   this.setState({ orderedPrograms: ordered });
  // }

  render() {
    const {school, year} = this.props;
    // const { orderedPrograms } = this.state;
    const { programs } = this.props;

    if (!programs.length) {
      return (
        <div>
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">There are no Programs for "{year}" yet</h5>
              <p className="card-text">If you know of any programs happening at your school <br/>it's easy to add them!
              </p>
            </div>
            <QuickAddProgram schoolCode={school.code} year={year} title=""/>
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
  }

}

export default ProgramsList;
