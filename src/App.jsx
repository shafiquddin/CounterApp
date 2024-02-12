import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import ConfiguredCounter from "./components/Counter/configuredCounter.jsx";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  const handleSetCount = (count) => {
    setChosenCount(count);
  };

  return (
    <>
      <Header />
      <main>
        <ConfiguredCounter onSet={handleSetCount} />
        <Counter initialCount={chosenCount} />
        <Counter initialCount={0} />
      </main>
    </>
  );
}

export default App;
