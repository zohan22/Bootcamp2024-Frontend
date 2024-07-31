import { useState, useRef } from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    const newValue = result + Number(inputRef.current.value);
    setResult(newValue);
    inputRef.current.value = newValue;
  }; 
 
  function minus(e) { 
    e.preventDefault();
    const newValue = result - Number(inputRef.current.value);
    setResult(newValue);
    inputRef.current.value = newValue;
  };
 
  function times(e) { 
    e.preventDefault();
    const newValue = result * Number(inputRef.current.value);
    setResult(newValue);
    inputRef.current.value = newValue;
  }; 
 
  function divide(e) { 
    e.preventDefault();
    const newValue = result / Number(inputRef.current.value);
    setResult(newValue);
    inputRef.current.value = newValue;
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = "";
  }; 
 
  function resetResult(e) { 
    e.preventDefault();
    setResult(0);
    inputRef.current.value = 0;
  };
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Calculadora</h1> 
      </div> 
      <form> 
        <input
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>plus</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App;
