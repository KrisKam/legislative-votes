import React, {Component} from "react";
import elephant from "../../src/images/elephant.png";
import donkey from "../../src/images/donkey.png";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Link} from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="border-bottom border-secondary Header-font-weight" color="light" light expand="md">
          <NavbarBrand>
            <Link to="/">
              <img src={elephant} alt="Republican Elephant" className="p-2" />
              <span className="Header-font-style">CO Legislative Tracker</span>
              <img src={donkey} alt="Democratic Donkey" className="p-2" />
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <span className="Header-dropdown-font">Legislators</span>
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to="#">
                    <DropdownItem>
                      All Legislators
                    </DropdownItem>
                  </Link>
                  <Link to="#">
                    <DropdownItem>
                      By Party
                    </DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar className="px-3">
                <DropdownToggle nav caret>
                <span className="Header-dropdown-font">Bills</span>
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to="/bills">
                    <DropdownItem>
                      All Bills
                    </DropdownItem>
                  </Link>
                  <Link to="#">
                    <DropdownItem>
                      By Subject
                    </DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;