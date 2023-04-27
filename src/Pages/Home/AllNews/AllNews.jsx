import moment from 'moment';
import React from 'react';
import { Card, CardImg, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';



const AllNews = ({ news }) => {

    console.log(news)

    const { title, total_view, details, image_url, thumbnail_url, author, published_date, rating } = news

    return (
        <div>
            <Card className="mb-3">
                <Card.Header className='d-flex align-items-center'>
                    <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
                    <div className='ps-3 flex-grow-1'>
                        <p className='mb-0 fw-bold'>{author?.name}</p>
                        <p className='mb-0'><small>{moment(author?.published_date).format("yyyy-MM-D")} { }</small></p>
                    </div>
                    <div className='d-flex gap-3'>
                        <FaRegBookmark className='fs-5'></FaRegBookmark>
                        <FaShareAlt className='fs-5'></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />                <Card.Text>
                        {
                            details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}.... <Link to="/news/${_id}">Read</Link></>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted bg-white d-flex align-items-center">
                    <div className='d-flex gap-1 flex-grow-1'>
                        <Rating
                            placeholderRating={rating?.number}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar className='text-warning'></FaStar>}>
                        </Rating>
                        <span>{rating?.number}</span>
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <FaEye></FaEye> {total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default AllNews;