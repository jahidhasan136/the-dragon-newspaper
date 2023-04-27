import React from 'react';
import Header from '../Share/Header/Header';
import Footer from '../Share/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Share/LeftNav/LeftNav';
import RightNav from '../Share/RightNav/RightNav';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col sm={9}>middle content coming soon</Col>
                    <Col sm={3}><RightNav></RightNav></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;