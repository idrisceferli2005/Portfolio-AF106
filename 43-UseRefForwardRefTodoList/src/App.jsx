import  { useState, useRef } from "react";
import "./App.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef();

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };


  const incrementByInput = () => {
    const value = parseInt(inputRef.current.value, 10);
    if (!isNaN(value)) {
      setCount(count + value);
    }
  };

  const decrementByInput = () => {
    const value = parseInt(inputRef.current.value, 10);
    if (!isNaN(value)) {
      setCount(count - value);
    }
  };

  return (
    <div className="counter-container">
      <h1>🌟⭐ Stunning Counter 🌟⭐</h1>
      <div className="counter-display">
        <span className="count-text">{count}</span>
      </div>
      <div className="buttons">
      <button onClick={decrement} className="button-primary">-</button>
        <button onClick={increment} className="button-primary">+</button>

      </div>
      <div className="input-section">
        <input
          ref={inputRef}
          type="number"
          placeholder="Enter a number"
          className="counter-input"
        />
        <button onClick={incrementByInput} className="button-secondary">Add</button>
        <button onClick={decrementByInput} className="button-secondary">Subtract</button>
      </div>
    </div>
  );
};

export default Counter;