import React, {Component} from 'react';
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

class Dropdown extends Component {
  toggle = this.toggle.bind(this);
  state = {
      dropdownOpen: false
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Select Subject
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Agriculture</DropdownItem>
          <DropdownItem>Business &amp; Economic Development</DropdownItem>
          <DropdownItem>Capital Construction</DropdownItem>
          <DropdownItem>Children &amp; Domestic Matters</DropdownItem>
          <DropdownItem>Civil Law</DropdownItem>
          <DropdownItem>Courts &amp; Judicial</DropdownItem>
          <DropdownItem>Crimes, Corrections, &amp; Enforcement</DropdownItem>
          <DropdownItem>Education &amp; School Finance (Pre &amp; K-12)</DropdownItem>
          <DropdownItem>Elections &amp; Redistricting</DropdownItem>
          <DropdownItem>Energy</DropdownItem>
          <DropdownItem>Financial Services &amp; Commerce</DropdownItem>
          <DropdownItem>Fiscal Policy &amp; Taxes</DropdownItem>
          <DropdownItem>Gaming, Lottery, &amp; Racing</DropdownItem>
          <DropdownItem>Health Care &amp; Health Insurance</DropdownItem>
          <DropdownItem>Higher Education</DropdownItem>
          <DropdownItem>Housing</DropdownItem>
          <DropdownItem>Human Services</DropdownItem>
          <DropdownItem>Immigration</DropdownItem>
          <DropdownItem>Insurance</DropdownItem>
          <DropdownItem>Labor &amp; Employment</DropdownItem>
          <DropdownItem>Liquor, Tobacco, &amp; Marijuana</DropdownItem>
          <DropdownItem>Local Government</DropdownItem>
          <DropdownItem>Military &amp; Veterans</DropdownItem>
          <DropdownItem>Natural Resources &amp; Environment</DropdownItem>
          <DropdownItem>Public Health</DropdownItem>
          <DropdownItem>State Government</DropdownItem>
          <DropdownItem>State Revenue &amp; Budget</DropdownItem>
          <DropdownItem>Telecommunications &amp; Information Technology</DropdownItem>
          <DropdownItem>Transportation &amp; Motor Vehicles</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default Dropdown;