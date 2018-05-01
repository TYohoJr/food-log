import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    // NavItem,
    // NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import "./SignInNavbar.css";
import { connect } from 'react-redux';
import LogIn from "../LogIn/LogIn";
import SignUp from "../SignUp/SignUp";

class SignInNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.userLogOut = this.userLogOut.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    userLogOut() {
        localStorage.clear();
        window.location.href = '/'
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {/* <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem> */}
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Account
                                </DropdownToggle>
                                <DropdownMenu right>
                                    {/* <DropdownItem onClick={this.userLogIn}> */}
                                        <LogIn />
                                    {/* </DropdownItem> */}
                                    {/* <DropdownItem> */}
                                        <SignUp />
                                    {/* </DropdownItem> */}
                                    <DropdownItem divider />
                                    <DropdownItem onClick={this.userLogOut}>
                                        Log Out
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default connect((state) => (state))(SignInNavbar);