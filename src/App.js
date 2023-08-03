import './App.css';
import CalculatorLogo from './images/calculator-logo.png';
import Logo from './components/Logo';
import Button from './components/Button';
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  const addInput = val => {
    setInput(input + val);
  };

  const calculateResult = () => {
    if (input) { // If input isn't empty
      setInput(evaluate(input)); // evaluate : function that evaluates the operation of a string
    } else {
      alert('Enter a valid operation.');
    }
  };

  return (
    <div className="App">

      <div className='logo-container'>
        <Logo img={CalculatorLogo} />
      </div>

      <div className='calculator-container'>

        <Screen input={input} />

        <div className='row'>
          <Button handleClic={addInput}>7</Button>
          <Button handleClic={addInput}>8</Button>
          <Button handleClic={addInput}>9</Button>
          <Button handleClic={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClic={addInput}>4</Button>
          <Button handleClic={addInput}>5</Button>
          <Button handleClic={addInput}>6</Button>
          <Button handleClic={addInput}>-</Button>
        </div>
        <div className='row'>
        <Button handleClic={addInput}>1</Button>
          <Button handleClic={addInput}>2</Button>
          <Button handleClic={addInput}>3</Button>
          <Button handleClic={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClic={calculateResult}>=</Button>
          <Button handleClic={addInput}>0</Button>
          <Button handleClic={addInput}>.</Button>
          <Button handleClic={addInput}>/</Button>
        </div>

        <div className='row'>
          <ButtonClear handleClear={() => setInput('')}>
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
