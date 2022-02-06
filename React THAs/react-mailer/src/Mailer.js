import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Form, Button, Col, InputGroup } from 'react-bootstrap';

function Mailer() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log('Not validated');
      event.preventDefault();
      event.stopPropagation();
    } else {
      console.log('validated');

      emailjs
        .sendForm(
          'service_813v2o8',
          'template_fg45ubr',
          event.target,
          'user_9JzYhC528GdAWDZIxaEEc'
        )
        .then((res) => {
          console.log(res);
          setValidated(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setValidated(true);
  };

  return (
    <div className='container border mt-5 p-4'>
      <h1 className='text-center'>Contact Form</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group
          className='mb-3'
          as={Col}
          md='12'
          controlId='validationCustom01'>
          <Form.Label>Name</Form.Label>
          <Form.Control required type='text' name='name' placeholder='Name' />
          <Form.Control.Feedback type='invalid'>
            Please enter a valid username.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group
          className='mb-3'
          as={Col}
          md='12'
          controlId='validationCustom01'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            type='number'
            name='phone'
            placeholder='Phone Number'
          />
          <Form.Control.Feedback type='invalid'>
            Please enter your phone number.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group
          className='mb-3'
          as={Col}
          md='12'
          controlId='validationCustom01'>
          <Form.Label>Email</Form.Label>
          <InputGroup className='mb-2'>
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control
              required
              type='email'
              name='email'
              placeholder='Email'
            />

            <Form.Control.Feedback type='invalid'>
              Please enter a valid email.
            </Form.Control.Feedback>
          </InputGroup>
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Message</Form.Label>
          <Form.Control as='textarea' name='message' rows={4} required />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Check
            required
            label='Agree to terms and conditions'
            feedbackType='invalid'
          />
        </Form.Group>
        <Button className='mb-3' type='submit' value='Send'>
          Submit form
        </Button>
      </Form>
    </div>
  );
}

export default Mailer;
