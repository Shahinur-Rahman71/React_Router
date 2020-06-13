import React, { Component } from 'react';
import { NavLink,Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Navigation extends Component {
    render() {
        return (
            <div>
                {/* <NavLink exact activeStyle={{color: "green"}} to="/">Home</NavLink>
                <NavLink exact activeStyle={{color: "pink"}} to="/about">About</NavLink>
                <NavLink exact activeStyle={{color: "dark"}} to="/contact">Contact</NavLink> */}

                <Navbar fixed="top"  bg="dark" variant="dark" >
                    <Navbar.Brand as={Link} to="/">ReactJs Coder</Navbar.Brand>
                    <Nav className="ml-auto mr-5">
                        <Nav.Link  className="text-light" as={Link} to="/">Home</Nav.Link>
                        <Nav.Link  className="text-light" as={Link} to="about">About</Nav.Link>
                        <Nav.Link  className="text-light" as={Link} to="contact">Contact</Nav.Link>                       
                    </Nav>
                </Navbar>
                
            </div>
        );
    }
}

export default Navigation;