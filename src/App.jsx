import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div id="screen"></div>
        <div id="buttons"></div>
      </div>
    </>
  );
}

export default App;
