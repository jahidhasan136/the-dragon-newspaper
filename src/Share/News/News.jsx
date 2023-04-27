import React from 'react';
import { Card, CardImg } from 'react-bootstrap';

const News = ({ news }) => {
    console.log(news)

    const { title, total_view, details, image_url, thumbnail_url, author } = news

    return (
        <Card className="mb-3">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />                <Card.Text>
                    {
                        details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}....</>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted bg-white">2 days ago</Card.Footer>
        </Card>
    );
};

export default News;