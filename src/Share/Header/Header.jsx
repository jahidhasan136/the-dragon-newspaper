import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import moment from 'moment/moment';
import Marquee from 'react-fast-marquee';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {

    const { user } = useContext(AuthContext)

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
                    Math Hightlights: Germany vs Spain - as it happened !
                </Marquee>
            </div>
            
        </Container>
    );
};

export default Header;