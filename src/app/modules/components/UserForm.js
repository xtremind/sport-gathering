import React, { useState } from 'react';
import { Card, Button, Form, InputGroup } from 'react-bootstrap';
import User from '../../shared/entities/User';
import CryptoJS from 'crypto-js';
import Cookies from 'universal-cookie';

function UserForm(props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        // Encrypt data
        var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(new User(event.target.username.value, event.target.email.value)), 'my-secret-key@123').toString();

        const cookies = new Cookies();
        cookies.set('userData', ciphertext, { path: '/' });

        setValidated(true);
    };

    // afficher un formulaire pour insérer un surnom
    // à la validation, créer un hash
    // insère le nom + hash dans un cookie

    return (
        <Card style={{ maxWidth: '800px', margin: "0 auto" }}>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default UserForm;