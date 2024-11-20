import React, { useState, useEffect } from "react";
import "./WordGrid.css";

const WordGrid = ({ words, columns, onMatch, onAttempt, resetTrigger }) => {
  const [selectedWords, setSelectedWords] = useState([]);
  const [matchedWords, setMatchedWords] = useState([]);
  const [feedback, setFeedback] = useState({});

  useEffect(() => {
    // Reset state when the game is reset
    setSelectedWords([]);
    setMatchedWords([]);
    setFeedback({});
  }, [resetTrigger]);

  const handleWordClick = (word) => {
    if (matchedWords.includes(word) || selectedWords.includes(word)) return;

    const newSelection = [...selectedWords, word];

    if (newSelection.length === 2) {
      const [word1, word2] = newSelection;

      onAttempt(); // Increment attempts

      if (onMatch(word1, word2)) {
        setMatchedWords((prev) => [...prev, word1, word2]);
        setFeedback({ [word1]: "correct", [word2]: "correct" });
      } else {
        setFeedback({ [word1]: "incorrect", [word2]: "incorrect" });

        setTimeout(() => {
          setFeedback({});
        }, 800);
      }

      setTimeout(() => {
        setSelectedWords([]);
      }, 800);
    } else {
      setSelectedWords(newSelection);
    }
  };

  return (
    <div
      className="word-grid"
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {words.map((word, index) => (
        <button
          key={index}
          onClick={() => handleWordClick(word)}
          className={`${feedback[word] || ""} ${
            matchedWords.includes(word) ? "hidden" : ""
          }`}
        >
          {word}
        </button>
      ))}
    </div>
  );
};

export default WordGrid;
