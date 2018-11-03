import React, {Component} from "react";
import elephant from "../../src/images/elephant.png";
import donkey from "../../src/images/donkey.png";
import {Navbar, NavItem, NavbarToggler, Collapse, NavbarBrand, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
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
            <img src={elephant} alt="Republican Elephant" className="p-2" />
            <span className="Header-font-style">CO Legislative Tracker</span>
            <img src={donkey} alt="Democratic Donkey" className="p-2" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="mt-2">
                <Link to="/" className="Header-nav-font px-4">Home</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <span className="Header-nav-font">Legislators</span>
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to="/legislators">
                    <DropdownItem>
                      All Legislators
                    </DropdownItem>
                  </Link>
                  <Link to="/legislators/party">
                    <DropdownItem>
                      By Party
                    </DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar className="px-3">
                <DropdownToggle nav caret>
                <span className="Header-nav-font">Bills</span>
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


