import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import Exponent from "./components/Exponent";

function App() {
  const [count, setCount] = useState(0);

  // Funciones para incrementar y decrementar
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="App">
      <h2><em>Counter</em></h2>
      <Counter count={count} increment={increment} decrement={decrement} />

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <Exponent num={count} exponent={2} />
        <Exponent num={count} exponent={3} />
        <Exponent num={count} exponent={4} />
        <Exponent num={count} exponent={5} />
        <Exponent num={count} exponent={6} />
      </div>
    </div>
  );
}

export default App;
