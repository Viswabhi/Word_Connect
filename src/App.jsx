import React, { useState } from "react";
import WordGrid from "./components/WordGrid";
import ConfigPanel from "./components/ConfigPanel";
import { connectedWords } from "./data/connectedWords";
import './App.css';


const App = () => {
  const [groupSize, setGroupSize] = useState(2);
  const [itemCount, setItemCount] = useState(8);
  const [columns, setColumns] = useState(4);
  const [attempts, setAttempts] = useState(0);
  const [resetTrigger, setResetTrigger] = useState(false);

  // Get words dynamically based on groupSize
  const wordGroups = connectedWords.get(groupSize) || [];
  const words = React.useMemo(() => {
    const selectedGroups = wordGroups.slice(0, Math.floor(itemCount / groupSize));
    const flatWords = selectedGroups.flat();
    return [...flatWords].sort(() => Math.random() - 0.5).slice(0, itemCount);
  }, [groupSize, itemCount, resetTrigger]);

  // Check if words are connected
  const onMatch = (word1, word2) => {
    const group = wordGroups.find((g) => g.includes(word1) && g.includes(word2));
    return group && word1 !== word2;
  };

  // Increment attempts
  const handleAttempt = () => setAttempts((prev) => prev + 1);

  // Reset the game
  const handleReset = () => {
    setAttempts(0);
    setResetTrigger(!resetTrigger); // Trigger a reset by toggling
  };

  return (
    <div>
      <h1 className="head">Word Connect</h1>
      <p>Attempts: {attempts}</p>
      <ConfigPanel
        groupSize={groupSize}
        setGroupSize={setGroupSize}
        itemCount={itemCount}
        setItemCount={setItemCount}
        columns={columns}
        setColumns={setColumns}
      />
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
      <WordGrid
        
        words={words}
        columns={columns}
        onMatch={onMatch}
        onAttempt={handleAttempt}
        resetTrigger={resetTrigger}
      />
    </div>
  );
};

export default App;


