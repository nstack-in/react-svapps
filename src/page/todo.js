
import React, { createRef, useEffect, useState } from 'react';
import fetch from 'node-fetch';

function Todo() {
  const [data, updateData] = useState([]);
  const [result, updateResult] = useState([]);
  const query = createRef();

  const callAPI = async function () {
    console.log("API Called");
    const url = 'https://jsonplaceholder.typicode.com/todos/';
    const response = await fetch(url);
    const json = await response.json();
    updateData(json);
    updateResult(json);
  }

  useEffect(function () {
    callAPI();
  }, []);

  
  const search = function () {
    let fileterResult = [];
    const q = query.current.value;
    data.forEach(element => {
      const title = element.title;
      if (title.startsWith(q)) {
        fileterResult.push(element);
      }
    });
    updateResult(fileterResult);
  }


  return (
    <div className="container">
      <input type="text" ref={query} onChange={search} placeholder="Enter name" />

      {
        result.map(todo => {
          if (todo['completed'] === true) {
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

