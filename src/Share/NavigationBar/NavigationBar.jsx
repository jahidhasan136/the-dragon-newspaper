import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const NavigationBar = () => {

    const { user, logout } = useContext(AuthContext)

    const handleSignout = () => {
        logout()
            .then()
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <Container className='my-4'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto flex align-items-center">
                            <Link className="text-decoration-none text-muted" to="/category/0">Home</Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav className="d-flex align-items-center">
                            <Nav.Link>
                                <FaUserCircle style={{ fontSize: '2.3rem' }}></FaUserCircle>
                            </Nav.Link>
                            {
                                user ? <Button onClick={handleSignout} variant="secondary"><Link className="text-light text-decoration-none" to="/login">Logout</Link></Button> : <Button variant="secondary"><Link className="text-light text-decoration-none" to="/login">Login</Link></Button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;