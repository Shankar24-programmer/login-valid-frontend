import React from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Login2() {
    return (
        <div>
            <Navbar
                color="light"
                expand="md"
                light
            >
                <NavbarBrand href="/" style={{ "marginLeft": "50px" }}>
                    User
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem style={{ "marginLeft": "1050px" }}>
                            <NavLink href="/components/">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                About us
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown
                            inNavbar
                            nav
                        >
                            <DropdownToggle
                                caret
                                nav
                            >
                                My Account
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="/">
                                    Guest
                                </DropdownItem>
                                <DropdownItem href="/signup">
                                    Product Items
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href="/">
                                    Logout
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    {/* <NavbarText>
                            Simple Text
                        </NavbarText> */}
                </Collapse>
            </Navbar>
        </div>
    )
}
