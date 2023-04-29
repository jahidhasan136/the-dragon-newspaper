import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import editorInsight1 from '../../assets/editorsInsight1.png'
import editorInsight2 from '../../assets/editorsInsight2.png'
import editorInsight3 from '../../assets/editorsInsight3.png'
import moment from 'moment';

const EditorsInsight = () => {
    return (
        <div className='mt-5'>
            <h2 className='mb-3'>Editors Insight</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={editorInsight1} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>{moment().format('MMMM D, YYYY')}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={editorInsight2} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>{moment().format('MMMM D, YYYY')}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={editorInsight3} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>{moment().format('MMMM D, YYYY')}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default EditorsInsight;