import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

function Counter(props) {
  const [count, updateCount] = useState(10);

  const increment = () => {
    const updated = count + 1;
    updateCount(updated);
  };
  const decrement = () => {
    const updated = count - 1;
    updateCount(updated);
  };

  return (
    <Container>
      <h1>{count}</h1>
      <Button variant="primary" onClick={increment}>Increment</Button>
      <br />
      <br />
      <Button variant="danger" onClick={decrement}>Decrement</Button>
    </Container>
  );
}

export default Counter