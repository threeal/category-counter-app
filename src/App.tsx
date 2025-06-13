import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </>
  );
}
