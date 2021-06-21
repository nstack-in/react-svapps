import React, { createRef, useState } from 'react';
import { Container, Card, Button, Form, Alert } from 'react-bootstrap';


function Contact(props) {
  const name = createRef();
  const reason = createRef();
  const message = createRef();
  const [errors, updateErrors] = useState([]);

  const submitForm = () => {
    const name_value = name.current.value;
    const reason_value = reason.current.value;
    const message_value = message.current.value;
    const val = {
      name: name_value,
      reason: reason_value,
      message: message_value,
    };
    const error_responses = [];
    if (val.name.length < 3) {
      error_responses.push('Name must be greater than 3 letter');
    }
    if (val.message.length < 16) {
      error_responses.push('Message must be greater than 16 letter');
    }
    updateErrors(error_responses);
  }

  return (
    <Container>
      <h1>Contact</h1>
      <Card style={{
        width: '520px',
      }}>
        <Card.Header>
          Contact Form
        </Card.Header>
        <Card.Body>

          {
            errors.map(e => <Alert variant="danger" key="e">{e}</Alert>)
          }

          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" ref={name} placeholder="Enter name" />
              <Form.Text className="text-muted">
                Enter Your Full Name
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="reason">
              <Form.Control as="select" ref={reason}>
                <option value="none">Reason to Contact</option>
                <option value="feedback">Feeback</option>
                <option value="issue">Issue</option>
                <option value="query">Query</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={3} ref={message} />
            </Form.Group>

            <Button onClick={submitForm} variant="primary" type="button" className="btn-block">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Contact