import React, {Component} from 'react';
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

class Dropdown extends Component {
  toggle = this.toggle.bind(this);
  state = {
      dropdownOpen: false,
      subject: ""
  }

  toggle(e) {
    let subject = e.target.name;
    this.props.selectSubject(subject)
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      subject: subject
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle className="Dropdown-button" caret>
          Choose a Bill Subject
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={this.toggle} name="Agriculture">Agriculture</DropdownItem>
          <DropdownItem onClick={this.toggle} name="Business">Business &amp; Economic Development</DropdownItem>
          <DropdownItem onClick={this.toggle} name="Capital">Capital Construction</DropdownItem>
          <DropdownItem onClick={this.toggle} name="Children"> Children &amp; Domestic Matters</DropdownItem>
          <DropdownItem onClick={this.toggle} name="Civil">Civil Law</DropdownItem>
          <DropdownItem onClick={this.toggle} name="Courts">Courts &amp; Judicial</DropdownItem>
          <DropdownItem onClick={this.toggle} name="Crimes">Crimes, Corrections, &amp; Enforcement</DropdownItem>
          <DropdownItem onClick={this.toggle} name="K-12">Education &amp; School Finance (Pre &amp; K-12)</DropdownItem>
          <DropdownItem onClick={this.toggle} name="Elections">Elections &amp; Redistricting</DropdownItem>
          <DropdownItem onClick={this.toggle} name="Energy">Energy</DropdownItem>
          <DropdownItem onClick={this.toggle} name="Financial">Financial Services &amp; Commerce</DropdownItem>
          <DropdownItem onClick={this.toggle} name="Fiscal">Fiscal Policy &amp; Taxes</DropdownItem>
          <DropdownItem onClick={this.toggle} name="Gaming">Gaming, Lottery, &amp; Racing</DropdownItem>
          <DropdownItem onClick={this.toggle} name="Health Care">Health Care &amp; Health Insurance</DropdownItem>
          <DropdownItem onClick={this.toggle} name="Higher">Higher Education</DropdownItem>
          <DropdownItem onClick={this.toggle} name="Housing">Housing</DropdownItem>
          <DropdownItem onClick={this.toggle} name="Human">Human Services</DropdownItem>
          <DropdownItem onClick={this.toggle} name="Immigration">Immigration</DropdownItem>
          <DropdownItem onClick={this.toggle} name="Insurance">Insurance</DropdownItem>
          <DropdownItem onClick={this.toggle} name="Labor">Labor &amp; Employment</DropdownItem>
          <DropdownItem onClick={this.toggle} name="Liquor">Liquor, Tobacco, &amp; Marijuana</DropdownItem>
          <DropdownItem onClick={this.toggle} name="Local">Local Government</DropdownItem>
          <DropdownItem onClick={this.toggle} name="Military">Military &amp; Veterans</DropdownItem>
          <DropdownItem onClick={this.toggle} name="Natural">Natural Resources &amp; Environment</DropdownItem>
          <DropdownItem onClick={this.toggle} name="Public">Public Health</DropdownItem>
          <DropdownItem onClick={this.toggle} name="State Government">State Government</DropdownItem>
          <DropdownItem onClick={this.toggle} name="State Revenue">State Revenue &amp; Budget</DropdownItem>
          <DropdownItem onClick={this.toggle} name="Telecommunications">Telecommunications &amp; Information Technology</DropdownItem>
          <DropdownItem onClick={this.toggle} name="Transportation">Transportation &amp; Motor Vehicles</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default Dropdown;