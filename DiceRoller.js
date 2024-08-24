import React, { useState } from 'react';
import axios from 'axios';

const DiceRoller = () => {
  const [roll, setRoll] = useState(null);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const rollDice = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    setRoll(result);
  };

  const saveScore = async () => {
    if (name && roll) {
      await axios.post('http://localhost:5000/api/scores', {
        name,
        score: roll,
      });
      setMessage('Score saved!');
    }
  };

  return (
    <div>
      <button onClick={rollDice}>Roll Dice</button>
      {roll && <h2>Result: {roll}</h2>}
      {roll && (
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={saveScore}>Save Score</button>
        </div>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default DiceRoller;
