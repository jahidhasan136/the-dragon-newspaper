import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {


    const {login} = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/category/0'

    const handleSingin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        
        console.log(email, password)

        login(email, password)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser)
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.error(error)
        })

    }

    return (
        <Container className="d-flex align-items-center">
            <Form onSubmit={handleSingin} className="mx-auto bg-light rounded-2" style={{ width: '752px', marginTop: '30px', padding: '50px' }}>
                <h2 className='text-center fw-bolder mb-5'>Login your accoutn</h2>
                <hr className='mb-5 text-black-50' />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-bold fs-4 text-muted">Email address</Form.Label>
                    <Form.Control style={{height: '55px'}} type="email" name="email" placeholder="Enter your email address" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="fw-bold fs-4 text-muted">Password</Form.Label>
                    <Form.Control style={{height: '55px'}} type="password" name="password" placeholder="Enter your password" required/>
                </Form.Group>
                <Button className="w-100 fw-bold mt-4" style={{ height: '45px' }} variant="secondary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text>
                    <p className='mt-4 text-center fw-bold'>
                        Don't Have An Account? <Link to="/register" className="text-danger">Register</Link>
                    </p>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;