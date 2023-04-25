import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import moment from 'moment/moment';
import Marquee from 'react-fast-marquee';

const Header = () => {
    return (
        <Container>
            <div className='text-center mt-5'>
                <img src={logo} alt="" />
                <p><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D YYYY")}</p>
            </div>
            <div className='d-flex border p-2 gap-2'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={50}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <div className='my-4'>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link href="#features">Home</Nav.Link>
                                <Nav.Link href="#pricing">About</Nav.Link>
                                <Nav.Link href="#pricing">Career</Nav.Link>
                            </Nav>
                            <Nav  className='flex align-items-center'>
                                <Nav.Link href="#deets">Profile</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    <Button variant="secondary">Login</Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Container>
    );
};

export default Header;