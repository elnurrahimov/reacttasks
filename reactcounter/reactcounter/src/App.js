import "./index.css";
import React, { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      
      <button onClick={() => (count <10 ? setCount(count + 1) : count)}>+</button>
       <p className="count"> {count}</p>
      <button onClick={() => (count >-10 ? setCount(count - 1) : count)}>-</button>
    </div>
    
  );
}
