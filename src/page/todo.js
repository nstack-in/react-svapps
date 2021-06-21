
import React, { useState } from 'react';
import fetch from 'node-fetch';

function Todo() {
  const [data, updateData] = useState([]);

  const callAPI = async function () {
    const url = 'https://jsonplaceholder.typicode.com/todos/';
    const response = await fetch(url);
    const json = await response.json();
    updateData(json);
  }

  return (
    <div className="container">
      <button onClick={callAPI}>Call API</button>
      {
        data.map(todo => {
          if (todo['completed'] == true) {
            return (
              <p key={todo['id']}>
                <s>
                  {todo['id']} - {todo['title']}
                </s>
              </p>
            );
          } else {
            return (
              <p key={todo['id']}>
                <strong>
                  {todo['id']} - {todo['title']}
                </strong>
              </p>
            );
          }
        })
      }
    </div>
  );
}

export default Todo;

