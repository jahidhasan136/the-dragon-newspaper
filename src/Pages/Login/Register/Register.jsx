import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useState } from 'react';
import useTitle from '../../Hooks/UseTitle';

const Register = () => {

    const { createUser } = useContext(AuthContext)

    useTitle('Registration')

    const [accept, setAccept] = useState(false)
    const navigate = useNavigate()

    const handleRegistation = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value

        console.log(name, photo, email, password)

        createUser(email, password)
            .then(result => {
                const signUp = result.user
                console.log(signUp)
                navigate('/category/0')
            })
            .catch(error => {
                console.error(error)
            })

    }

    const handleTerms = evetn => {
        setAccept(evetn.target.checked)
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
                    <Form.Check 
                    onClick={handleTerms}
                    type="checkbox" 
                    label={<>Accept <Link to="/terms" className='text-decoration-none'>Terms & Condition</Link></>} />
                </Form.Group>
                <Button disabled={!accept} className="w-100 fw-bold" style={{ height: '45px' }} variant="secondary" type="submit">
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