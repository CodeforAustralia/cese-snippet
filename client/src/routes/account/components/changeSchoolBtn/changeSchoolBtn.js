import React from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import {
  Link as RRNavLink
} from 'react-router-dom';

import { getSchoolProgramsUrl } from 'helpers/url';

class ChangeSchoolBtn extends React.Component{

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const { schools } = this.props;
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="ml-1">
        <DropdownToggle caret size="sm" color="link">
          Change
        </DropdownToggle>
        <DropdownMenu>
          {schools.map((school, idx) => (
            <DropdownItem key={idx} tag={RRNavLink} to={getSchoolProgramsUrl(school.code, '2018')}>{school.name}</DropdownItem>
          ))}
        </DropdownMenu>
      </ButtonDropdown>
    )
  }

}

export default ChangeSchoolBtn;
