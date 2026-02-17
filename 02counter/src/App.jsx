import { useState, useCallback, useMemo } from "react";
import React from "react";
import "./App.css";

/* ---------------- React.memo child ---------------- */
const CounterDisplay = React.memo(function CounterDisplay({ value }) {
  console.log("CounterDisplay rendered");
  return <h2>Counter value: {value}</h2>;
});

function App() {
  const [counter, setCounter] = useState(15);

  if (counter === 19) {
    throw new Error("Counter crashed intentionally");
  }

  /* ---------------- useCallback ---------------- */
  const addValue = useCallback(() => {
    setCounter((prev) => (prev < 20 ? prev + 1 : prev));
  }, []);

  const removeValue = useCallback(() => {
    setCounter((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  /* ---------------- useMemo ---------------- */
  const computedValue = useMemo(() => {
    console.log("Running expensive calculation");
    return counter+10;
  }, [counter]);

  return (
    <>
      <h1>React Series</h1>

      {/* React.memo in action */}
      <CounterDisplay value={counter} />

      <p>Computed Value: {computedValue}</p>

      <button onClick={addValue}>
        Add value {counter}
      </button>

      <br />

      <button onClick={removeValue}>
        Remove value {counter}
      </button>

      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
