import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegistation = event => {
        event.preventDefault()
        const from = event.target
        const name = from.name.value
        const photo = from.photo.value
        const email = from.email.value
        const password = from.password.value

        console.log(name, photo, email, password)

        createUser(email, password)
            .then(result => {
                const signUp = result.user
                console.log(signUp)
            })
            .catch(error => {
                console.error(error)
            })

    }


    return (
        <Container className="d-flex align-items-center">
            <Form onSubmit={handleRegistation} className="mx-auto bg-light rounded-2" style={{ width: '752px', marginTop: '30px', padding: '50px' }}>
                <h2 className='text-center fw-bolder mb-5'>Register your accoutn</h2>
                <hr className='mb-5 text-black-50' />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-bold fs-4 text-muted">Your Name</Form.Label>
                    <Form.Control style={{ height: '55px' }} type="text" name="name" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-bold fs-4 text-muted">Photo URL</Form.Label>
                    <Form.Control style={{ height: '55px' }} type="text" name="photo" placeholder="Enter your PhotoURL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-bold fs-4 text-muted">Email address</Form.Label>
                    <Form.Control style={{ height: '55px' }} type="email" name="email" placeholder="Enter your email address" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="fw-bold fs-4 text-muted">Password</Form.Label>
                    <Form.Control style={{ height: '55px' }} type="password" name="password" placeholder="Enter your password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Terms & Condition" />
                </Form.Group>
                <Button className="w-100 fw-bold" style={{ height: '45px' }} variant="secondary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text>
                    <p className='mt-4 text-center fw-bold'>
                        Already Have An Account? <Link to="/login" className="text-danger">Login</Link>
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

export default Register;