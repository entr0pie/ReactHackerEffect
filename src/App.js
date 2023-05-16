import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const original = "HACKER-EFFECT"; 
  const time_ms = 30;
  const iterations_per_shift = 5;

  const [text, setText] = useState(original);

  function getRandomString(length) {
    const getRandomLetter = () => {
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      return alphabet[randomIndex];
    }   

    let random = "";  
    
    for (var i = 0; i < length; i++) {
      random += getRandomLetter();     
    }
    
    return random;
  }

  async function hackerEffect() {

    setText(getRandomString(original.length));
    await new Promise(r => setTimeout(r, time_ms));
    
    var original_copy = "";
    
    for (var i = 0; i < original.length; i++) {
      original_copy += original[i];
      
      for (var j = 0; j < iterations_per_shift; j++) {
        const shift = original_copy + getRandomString(original.length - original_copy.length);
        setText(shift);
        await new Promise(r => setTimeout(r, time_ms));
      }
    }
  }

  return (
    <div className="container">
      <h1 onMouseEnter={hackerEffect}>{text}</h1>
    </div>
  );
}

export default App;
