// Ch6.2
/* Use the Open Trivia Database API (https://opentdb.com) to show a new random trivia question to user when the button is pressed (See the image below). 
At the beginning, the question can be empty.
API URL to get one question is https://opentdb.com/api.php?amount=1 */

import React, { useEffect, useState } from 'react';
export default function Trivia() {
  const [question, setQuestion] = useState("");

  async function newQuestion () {
    await fetch('https://opentdb.com/api.php?amount=1')
    .then(res => res.json())
    .then(data => setQuestion(data.results[0].question))
    .catch(err => alert(err))
  }

  return (
    <div>
        <h3>Trivia</h3>
        <p>{question}</p>
        <button onClick={newQuestion}>New Question</button>
    </div>
  );
}