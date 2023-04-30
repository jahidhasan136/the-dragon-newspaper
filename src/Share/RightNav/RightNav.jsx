import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../assets/bg.png'


const RightNav = () => {
    return (
        <div>
            <h4 className='fw-bold text-secondary'>Login With</h4>
            <Button className='mb-2 mt-4' variant="outline-primary"><FaGoogle/> Login With Google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login With Github</Button>
            <div className='mt-5'>
                <h4 className='fw-bold text-secondary'>Find Us On</h4>
                <ListGroup style={{cursor: 'pointer'}} className='mt-4'>
                    <ListGroup.Item className='p-3'><FaFacebook className='text-primary fs-4'/> Facebook</ListGroup.Item>
                    <ListGroup.Item className='p-3'><FaTwitter className='text-info fs-4'/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='p-3'><FaInstagram className='text-danger fs-4'/> Instagram</ListGroup.Item>
                </ListGroup>
                <Qzone></Qzone>
                <div className='text-center'>
                    <img src={bg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightNav;