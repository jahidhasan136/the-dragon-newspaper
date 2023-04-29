import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsight from '../EditorsInsight/EditorsInsight';

const SingleNews = () => {


    const singleNews = useLoaderData()
    const { title, total_view, details, image_url, thumbnail_url, author, published_date, rating, _id,category_id } = singleNews

    return (
        <div>
            <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}><Button  variant="danger"><FaArrowLeft></FaArrowLeft> All news in this Category</Button></Link>
            </Card.Body>
        </Card>
        <EditorsInsight></EditorsInsight>
        </div>
    );
};

export default SingleNews;