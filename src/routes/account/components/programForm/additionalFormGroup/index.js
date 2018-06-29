import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

import style from './style.scss';


class AdditionalFormGroup extends Component {
  constructor(props) {
    super(props);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      status: 'Closed',
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  onEntering() {
    this.setState({ status: 'Opening' });
  }

  onEntered() {
    this.setState({ status: 'Opened' });
  }

  onExiting() {
    this.setState({ status: 'Closing' });
  }

  onExited() {
    this.setState({ status: 'Closed' });
    this.props.onDeactive && this.props.onDeactive();
  }

  render() {
    const { status } = this.state;
    const activated = status === 'Opening' || status === 'Opened';
    return (
      <div>
        <Button color="light" block onClick={this.toggle} className={cx(
          "mb-3",
          style.button,
          activated ? style.isActive : null,
        )}>{!activated && <span>+ </span>}{this.props.title} {activated && <span className="float-right">×</span>}</Button>
        <Collapse isOpen={this.state.collapse}
                  onEntering={this.onEntering}
                  onEntered={this.onEntered}
                  onExiting={this.onExiting}
                  onExited={this.onExited}
        >
          <Card className="mb-4">
            <CardBody>
              {this.props.children}
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

AdditionalFormGroup.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onDeactivate: PropTypes.func,
};

export default AdditionalFormGroup;
