import React, {useState} from 'react';
import './App.css'

function App() {
  const [value_1, setValue_1] = useState(0);
  const [value_10, setValue_10] = useState(0);
  const [valueRandom, setValueRandom] = useState(0)
  const add_1 = () => {
    setValue_1(value_1 + 1);
  }
  const add_10 = () => {
    setValue_10(value_10 + 10);
  };
  const addRandom = () => {
    setValueRandom(valueRandom + Math.floor((Math.random() * 10) + 1));
  };
  const minus_1 = () => {
    setValue_1(value_1 - 1);
  };
  const minus_10 = () => {
    setValue_10(value_10 - 10);
  };
  const minusRandom = () => {
    setValueRandom(valueRandom - Math.floor((Math.random() * 10) + 1));
  };
  const reset = () => {
    setValue_1(value_1 - value_1);
    setValue_10(value_10 - value_10);
    setValueRandom(valueRandom - valueRandom);
  };
  return (
      <div className={'App'}>
        <header className={'App-value_1'}>COUNTERS</header>
        <div className={'App-value_1'}>
          <button onClick={add_1} className={'btn'}>+1</button>
          {value_1}
          <button onClick={minus_1} className={'btn'}>-1</button>
        </div>
        <div className={'App-value_2'}>
          <button onClick={add_10} className={'btn'}>+10</button>
          {value_10}
          <button onClick={minus_10} className={'btn'}>-10</button>
        </div>
        <div className={'App-value_3'}>
          <button onClick={addRandom} className={'btn'}>+Rand</button>
          {valueRandom}
          <button onClick={minusRandom} className={'btn'}>-Rand</button>
        </div>
        <div className={'App-value_4'}>
          <button onClick={reset} className={'btn'}>Reset</button>
        </div>
      </div>
  );
}

export default App;

