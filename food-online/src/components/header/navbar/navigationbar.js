import React, { Component } from "react";

import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap'
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
    }
    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render() {
        return (
            <div>
                <div >
                    <Navbar
                        expand="md"
                        light
                        fixed="top"
                        color="light"
                    >
                        <NavbarToggler onClick={this.navToggle} />
                        <NavbarBrand href="/">
                            <p style={{ marginLeft: "105px", fontSize:"30px", fontWeight:"bold",textTransform:"uppercase"}}>
                                Auburn
                            </p>
                        </NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="offset-lg-5 col-lg-5"
                                navbar
                            >
                                <NavItem style={{ marginRight: "25px", }}>
                                    <NavLink href="/">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem style={{ marginRight: "25px" }}>
                                    <NavLink href="/menu">
                                        Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem style={{ marginRight: "25px" }}>
                                    <NavLink href="/about">
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem style={{ marginRight: "25px" }}>
                                    <NavLink href="/contact">
                                        Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }
}
export default NavBar;