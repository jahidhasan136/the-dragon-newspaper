import React from 'react';
import Header from '../Share/Header/Header';
import Footer from '../Share/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Share/LeftNav/LeftNav';
import RightNav from '../Share/RightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col sm={3}><LeftNav></LeftNav></Col>
                    <Col sm={6}>middle content</Col>
                    <Col sm={3}><RightNav></RightNav></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;